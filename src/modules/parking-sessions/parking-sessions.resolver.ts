import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ParkingSessionsService } from './parking-sessions.service';
import { ParkingSession } from './types/parking-session.type';
import { ParkingSessionsArgs } from './args/parking-sessions.args';
import { CreateParkingSessionInput } from './input/create-parking-session.input';
import { GetParkingSessionsByParkingStateArgs } from './args/get-parking-sessions-by-parking-state.args';
import { PaginatedParkingSessions } from './types/paginated-parking-session.type';

@Resolver()
export class ParkingSessionsResolver {
  constructor(private readonly parkingSessionsService: ParkingSessionsService) {}

  @Query(()=> PaginatedParkingSessions, { name: 'parkingSessions' })
  async getAllParkingSessions(
    @Args() args: ParkingSessionsArgs,
  ): Promise<PaginatedParkingSessions> {
    return this.parkingSessionsService.getAllParkingSessions(args);
  }

  @Mutation(() => ParkingSession, { name: 'createParkingSession' })
  createParkingSession(
    @Args('input') input: CreateParkingSessionInput
  ) {
    return this.parkingSessionsService.createParkingSession(input);
  }

  @Query(()=> PaginatedParkingSessions, { name: 'parkingSessionsByParkingState' })
  async getParkingSessionsByParkingState(
    @Args() args: GetParkingSessionsByParkingStateArgs
  ): Promise<PaginatedParkingSessions> {
    return this.parkingSessionsService.getParkingSessionsByParkingState(args);
  }

  @Mutation(() => ParkingSession, { name: 'exitParkingSession' })
  async exitParkingSession(
    @Args('id', { type: () => String }) id: string,
  ): Promise<ParkingSession> {
    return this.parkingSessionsService.exitParkingSession(id);
  }
}
