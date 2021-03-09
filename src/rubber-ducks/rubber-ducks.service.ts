import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { CreateRubberDuckInput } from './dto/create-rubber-duck.input'
import { UpdateRubberDuckInput } from './dto/update-rubber-duck.input'
import { InjectModel } from '@nestjs/mongoose'
import { RubberDuck, RubberDuckDocument } from './schemas/rubber-duck.schema'

@Injectable()
export class RubberDucksService {
  constructor(
    @InjectModel(RubberDuck.name)
    private rubberDuckModel: Model<RubberDuckDocument>
  ) {}

  create(createRubberDuckInput: CreateRubberDuckInput) {
    return this.rubberDuckModel.create(createRubberDuckInput)
  }

  findAll() {
    return this.rubberDuckModel.find().exec()
  }

  findOne(id: string) {
    return this.rubberDuckModel.findById(id).exec()
  }

  update(id: string, updateRubberDuckInput: UpdateRubberDuckInput) {
    return this.rubberDuckModel
      .findByIdAndUpdate(id, updateRubberDuckInput)
      .exec()
  }

  remove(id: string) {
    return this.rubberDuckModel.findByIdAndDelete(id).exec()
  }
}
