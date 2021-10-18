import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { DatabaseConnection } from './database-connection/database-connection';
import { PersonModule } from './person/person.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PersonModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
    }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnection,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
