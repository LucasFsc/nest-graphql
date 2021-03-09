import { Test, TestingModule } from '@nestjs/testing'
import { RubberDucksService } from './rubber-ducks.service'

describe('RubberDucksService', () => {
  let service: RubberDucksService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RubberDucksService]
    }).compile()

    service = module.get<RubberDucksService>(RubberDucksService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
