import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

import { ParkingSessionsModule } from './modules/parking-sessions/parking-sessions.module';
import { PrintModule } from './modules/print/print.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: true,
      introspection: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
    }),
    EventEmitterModule.forRoot(),
    ParkingSessionsModule,
    PrintModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
