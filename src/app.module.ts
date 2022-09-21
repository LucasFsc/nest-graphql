import { GqlJwtAuthGuard } from '@/guards/gql-jwt-auth.guard'
import { RolesGuard } from '@/guards/roles.guard'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { GraphQLModule } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose'
import { GraphQLError } from 'graphql'
import { join } from 'path'
import { AuthModule } from './auth/auth.module'
import { CapesModule } from './capes/capes.module'
import { RubberDucksModule } from './rubber-ducks/rubber-ducks.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      useNewUrlParser: true
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'interface',
        skipResolverArgs: true
      },
      sortSchema: true,
      formatError: (error: GraphQLError) => ({
        message: error.extensions?.exception?.response?.message || error.message
      })
    }),
    UsersModule,
    AuthModule,
    CapesModule,
    RubberDucksModule
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
