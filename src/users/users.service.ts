import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserInput: CreateUserInput) {
    const { password: plainPassword } = createUserInput;
    const salt = await bcrypt.genSalt(Number(process.env.BCRYPT_ROUNDS));
    const password = await bcrypt.hash(plainPassword, salt);
    return this.userModel.create({ ...createUserInput, password });
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

  async findByUsername(name: string) {
    return this.userModel.findOne({ name });
  }
}
