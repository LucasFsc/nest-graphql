import { Test, TestingModule } from '@nestjs/testing'
import { RubberDucksResolver } from './rubber-ducks.resolver'
import { RubberDucksService } from './rubber-ducks.service'

describe('RubberDucksResolver', () => {
  let resolver: RubberDucksResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RubberDucksResolver, RubberDucksService]
    }).compile()

    resolver = module.get<RubberDucksResolver>(RubberDucksResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
