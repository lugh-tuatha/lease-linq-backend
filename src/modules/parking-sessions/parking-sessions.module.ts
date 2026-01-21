import { Module } from '@nestjs/common';
import { ParkingSessionsService } from './parking-sessions.service';
import { ParkingSessionsResolver } from './parking-sessions.resolver';
import { PrismaService } from 'src/shared/database/prisma.service';

@Module({
  providers: [
    ParkingSessionsResolver, 
    ParkingSessionsService,
    PrismaService
  ],
  exports: [
    PrismaService
  ]
})
export class ParkingSessionsModule {}
