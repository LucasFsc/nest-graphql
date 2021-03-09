import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { GraphQLError } from 'graphql'
import { GqlJwtAuthGuard } from '@/guards/gql-jwt-auth.guard'
import { RolesGuard } from '@/guards/roles.guard'
import { CapesModule } from './capes/capes.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      useNewUrlParser: true
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/graphql.schema.gql'),
      sortSchema: true,
      formatError: (error: GraphQLError) => ({
        message: error.extensions?.exception?.response?.message || error.message
      })
    }),
    UsersModule,
    AuthModule,
    CapesModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: GqlJwtAuthGuard
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    }
  ]
})
export class AppModule {}
