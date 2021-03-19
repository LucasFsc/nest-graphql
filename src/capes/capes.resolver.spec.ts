import { getModelToken } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { CapesResolver } from './capes.resolver'
import { CapesService } from './capes.service'
import { Cape } from './schemas/cape.schema'

describe('CapesResolver', () => {
  let resolver: CapesResolver
  const capeModel = new Cape()

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CapesResolver,
        CapesService,
        {
          provide: getModelToken(Cape.name),
          useValue: capeModel
        }
      ]
    }).compile()

    resolver = module.get<CapesResolver>(CapesResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
