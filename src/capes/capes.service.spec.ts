import { Test, TestingModule } from '@nestjs/testing'
import { CapesService } from './capes.service'

describe('CapesService', () => {
  let service: CapesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CapesService]
    }).compile()

    service = module.get<CapesService>(CapesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
