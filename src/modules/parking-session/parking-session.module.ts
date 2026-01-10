import { Module } from '@nestjs/common';
import { ParkingSessionService } from './parking-session.service';
import { ParkingSessionResolver } from './parking-session.resolver';
import { PrismaService } from 'src/shared/database/prisma.service';

@Module({
  providers: [
    ParkingSessionResolver, 
    ParkingSessionService, 
    PrismaService
  ],
  exports: [
    PrismaService
  ]
})
export class ParkingSessionModule {}
