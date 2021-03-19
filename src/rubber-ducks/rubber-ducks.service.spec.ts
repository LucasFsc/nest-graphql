import { getModelToken } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { RubberDucksService } from './rubber-ducks.service'
import { RubberDuck } from './schemas/rubber-duck.schema'

describe('RubberDucksService', () => {
  let service: RubberDucksService
  const rubberDuckModel = new RubberDuck()

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RubberDucksService,
        {
          provide: getModelToken(RubberDuck.name),
          useValue: rubberDuckModel
        }
      ]
    }).compile()

    service = module.get<RubberDucksService>(RubberDucksService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
