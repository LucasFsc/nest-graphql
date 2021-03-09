import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { CreateCapeInput } from './dto/create-cape.input'
import { UpdateCapeInput } from './dto/update-cape.input'
import { InjectModel } from '@nestjs/mongoose'
import { Cape, CapeDocument } from './schemas/cape.schema'

@Injectable()
export class CapesService {
  constructor(@InjectModel(Cape.name) private capeModel: Model<CapeDocument>) {}

  create(createCapeInput: CreateCapeInput) {
    return this.capeModel.create(createCapeInput)
  }

  findAll() {
    return this.capeModel.find().exec()
  }

  findOne(id: string) {
    return this.capeModel.findById(id).exec()
  }

  update(id: string, updateCapeInput: UpdateCapeInput) {
    return this.capeModel.findByIdAndUpdate(id, updateCapeInput).exec()
  }

  remove(id: string) {
    return this.capeModel.findByIdAndRemove(id)
  }
}
