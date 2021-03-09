import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { CapesService } from './capes.service'
import { Cape } from './schemas/cape.schema'
import { CreateCapeInput } from './dto/create-cape.input'
import { UpdateCapeInput } from './dto/update-cape.input'

@Resolver(() => Cape)
export class CapesResolver {
  constructor(private readonly capesService: CapesService) {}

  @Mutation(() => Cape)
  createCape(@Args('createCapeInput') createCapeInput: CreateCapeInput) {
    return this.capesService.create(createCapeInput)
  }

  @Query(() => [Cape], { name: 'capes' })
  findAll() {
    return this.capesService.findAll()
  }

  @Query(() => Cape, { name: 'cape' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.capesService.findOne(id)
  }

  @Mutation(() => Cape)
  updateCape(@Args('updateCapeInput') updateCapeInput: UpdateCapeInput) {
    return this.capesService.update(updateCapeInput.id, updateCapeInput)
  }

  @Mutation(() => Cape)
  removeCape(@Args('id', { type: () => String }) id: string) {
    return this.capesService.remove(id)
  }
}
