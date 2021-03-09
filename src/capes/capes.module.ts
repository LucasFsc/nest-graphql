import { Module } from '@nestjs/common'
import { CapesService } from './capes.service'
import { CapesResolver } from './capes.resolver'
import { MongooseModule } from '@nestjs/mongoose'
import { Cape, CapeSchema } from './schemas/cape.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cape.name, schema: CapeSchema }])
  ],
  providers: [CapesResolver, CapesService]
})
export class CapesModule {}
