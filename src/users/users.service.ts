import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserInput: CreateUserInput) {
    return this.userModel.create(createUserInput);
  }

  async findAll() {
    return this.userModel.find().exec();
  }

  async findOne(id: string) {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    return this.userModel.findByIdAndUpdate(id, updateUserInput).exec();
  }

  async remove(id: string) {
    return this.userModel.findByIdAndRemove(id);
  }
}
