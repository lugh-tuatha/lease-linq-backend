import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

import { ParkingSessionsModule } from './modules/parking-sessions/parking-sessions.module';
import { PrintModule } from './modules/print/print.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: 'src/schema.gql',
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    EventEmitterModule.forRoot(),
    ParkingSessionsModule,
    PrintModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
