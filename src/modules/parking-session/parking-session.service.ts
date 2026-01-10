import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';

@Injectable()
export class ParkingSessionService {
  constructor(private prisma: PrismaService) {}

  async getParkingSessions() {
    return this.prisma.parkingSession.findMany();
  }

}
