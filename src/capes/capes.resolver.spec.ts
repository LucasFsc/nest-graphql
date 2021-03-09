import { Test, TestingModule } from '@nestjs/testing'
import { CapesResolver } from './capes.resolver'
import { CapesService } from './capes.service'

describe('CapesResolver', () => {
  let resolver: CapesResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CapesResolver, CapesService]
    }).compile()

    resolver = module.get<CapesResolver>(CapesResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
