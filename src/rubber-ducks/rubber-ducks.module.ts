import { Module } from '@nestjs/common'
import { RubberDucksService } from './rubber-ducks.service'
import { RubberDucksResolver } from './rubber-ducks.resolver'
import { MongooseModule } from '@nestjs/mongoose'
import { RubberDuck, RubberDuckSchema } from './schemas/rubber-duck.schema'
import { CapesModule } from '@/capes/capes.module'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RubberDuck.name, schema: RubberDuckSchema }
    ]),
    CapesModule
  ],
  providers: [RubberDucksResolver, RubberDucksService]
})
export class RubberDucksModule {}
