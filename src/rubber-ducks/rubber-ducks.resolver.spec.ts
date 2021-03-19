import { CapesService } from '@/capes/capes.service'
import { Cape } from '@/capes/schemas/cape.schema'
import { getModelToken } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { RubberDucksResolver } from './rubber-ducks.resolver'
import { RubberDucksService } from './rubber-ducks.service'
import { RubberDuck } from './schemas/rubber-duck.schema'

describe('RubberDucksResolver', () => {
  let resolver: RubberDucksResolver
  const rubberDuckModel = new RubberDuck()
  const capeModel = new Cape()

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RubberDucksResolver,
        RubberDucksService,
        CapesService,
        {
          provide: getModelToken(Cape.name),
          useValue: capeModel
        },
        {
          provide: getModelToken(RubberDuck.name),
          useValue: rubberDuckModel
        }
      ]
    }).compile()

    resolver = module.get<RubberDucksResolver>(RubberDucksResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
