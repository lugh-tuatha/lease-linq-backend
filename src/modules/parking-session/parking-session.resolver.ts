import { Query, Resolver } from '@nestjs/graphql';
import { ParkingSessionService } from './parking-session.service';
import { ParkingSession } from './types/parking-session.type';

@Resolver()
export class ParkingSessionResolver {
  constructor(private readonly parkingSessionService: ParkingSessionService) {}

    @Query(()=> [ParkingSession], { name: 'parkingSessions' })
    parkingSessions() {
      return this.parkingSessionService.getParkingSessions();
    }
}
