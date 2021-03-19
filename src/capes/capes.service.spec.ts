import { getModelToken } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { CapesService } from './capes.service'
import { Cape } from './schemas/cape.schema'

describe('CapesService', () => {
  let service: CapesService
  const capeModel = new Cape()

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CapesService,
        {
          provide: getModelToken(Cape.name),
          useValue: capeModel
        }
      ]
    }).compile()

    service = module.get<CapesService>(CapesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
