import {
  Resolver,
  ResolveField,
  Parent,
  Query,
  Mutation,
  Args
} from '@nestjs/graphql'
import { RubberDucksService } from './rubber-ducks.service'
import { RubberDuck } from './schemas/rubber-duck.schema'
import { CreateRubberDuckInput } from './dto/create-rubber-duck.input'
import { UpdateRubberDuckInput } from './dto/update-rubber-duck.input'
import { CapesService } from '@/capes/capes.service'

@Resolver(() => RubberDuck)
export class RubberDucksResolver {
  constructor(
    private readonly rubberDucksService: RubberDucksService,
    private capesService: CapesService
  ) {}

  @Mutation(() => RubberDuck)
  createRubberDuck(
    @Args('createRubberDuckInput') createRubberDuckInput: CreateRubberDuckInput
  ) {
    return this.rubberDucksService.create(createRubberDuckInput)
  }

  @Query(() => [RubberDuck], { name: 'rubberDucks' })
  findAll() {
    return this.rubberDucksService.findAll()
  }

  @Query(() => RubberDuck, { name: 'rubberDuck' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.rubberDucksService.findOne(id)
  }

  @Mutation(() => RubberDuck)
  updateRubberDuck(
    @Args('updateRubberDuckInput') updateRubberDuckInput: UpdateRubberDuckInput
  ) {
    return this.rubberDucksService.update(
      updateRubberDuckInput.id,
      updateRubberDuckInput
    )
  }

  @Mutation(() => RubberDuck)
  removeRubberDuck(@Args('id', { type: () => String }) id: string) {
    return this.rubberDucksService.remove(id)
  }

  @ResolveField()
  cape(@Parent() { cape }: RubberDuck) {
    return this.capesService.findOne(cape)
  }
}
