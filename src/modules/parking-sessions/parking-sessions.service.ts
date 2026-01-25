import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import { ParkingSessionsArgs } from './args/parking-sessions.args';
import { CreateParkingSessionInput } from './input/create-parking-session.input';
import { ParkingState } from 'generated/prisma/enums';
import { GetParkingSessionsByParkingStateArgs } from './args/get-parking-sessions-by-parking-state.args';
import { PaginatedParkingSessions } from './types/paginated-parking-session.type';

@Injectable()
export class ParkingSessionsService {
  constructor(private prisma: PrismaService) {}

  async getAllParkingSessions(args: ParkingSessionsArgs): Promise<PaginatedParkingSessions>  {
    const { page = 1, limit = 10 } = args;
    const skip = (page - 1) * limit;
    
    const [data, total] = await Promise.all([
      this.prisma.parkingSessions.findMany({
        take: limit,
        skip: skip,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.parkingSessions.count(),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      data,
      meta: {
        total,
        page,
        limit,
        totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      }
    };
  }

  async createParkingSession(input: CreateParkingSessionInput) {
    const newSession = await this.prisma.parkingSessions.create({
      data: {
        organizationId: "9ed47d8e-f82d-4016-a770-fc3c93563762",
        vehicleType: input.vehicleType,
        plateNumber: input.plateNumber,
        enteredAt: new Date(),
      },
    });

    return newSession;
  }

  async getParkingSessionsByParkingState(args: GetParkingSessionsByParkingStateArgs): Promise<PaginatedParkingSessions> {
    const { page = 1, limit = 10, parkingState } = args;
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.prisma.parkingSessions.findMany({
        where: {
          parkingState: parkingState,
        },
        // take: limit,
        // skip: skip,
        orderBy: { exitedAt: 'asc' }
      }),
      this.prisma.parkingSessions.count({
        where: {
          parkingState: parkingState,
        },
      }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      data,
      meta: {
        total,
        page,
        limit,
        totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      }
    };
  }

  async exitParkingSession(id: string) {
    const session = await this.prisma.parkingSessions.findUnique({
      where: { id }
    });

    if (!session) {
      throw new NotFoundException('Parking session not found');
    }

    if (session.parkingState === 'EXITED') {
      throw new BadRequestException('Parking session already exited');
    }

    const exitedAt = new Date();
    const durationMinutes = Math.ceil(
      (exitedAt.getTime() - session.enteredAt.getTime()) / 60000
    );

    const ratePerHour = 25;
    const hours = Math.ceil(durationMinutes / 60);
    const parkingFee = ratePerHour * hours;

    return this.prisma.parkingSessions.update({
      where: { id },
      data: {
        parkingState: 'EXITED',
        exitedAt,
        durationMinutes,
        parkingFee,
        paymentStatus: 'UNPAID',
      },
    })
  }
}
