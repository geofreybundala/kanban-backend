import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { List, ListDocument } from './entities/list.entity';
import { Model } from 'mongoose';

@Injectable()
export class ListService {
  constructor(@InjectModel(List.name) private listModel :Model<ListDocument>){}

  async create(createListDto: CreateListDto): Promise<List> {
    const createList = new this.listModel(createListDto);
    return createList.save();
  }

  async findAll() {
    return await this.listModel.find();
  }

  async findOne(id: string) {
    return await this.listModel.findOne({_id: id});
  }

  async update(id: string, updateListDto: UpdateListDto) {
    return await this.listModel.findOneAndUpdate({_id: id}, updateListDto);
  }

  async remove(id: string) {
    const record = await this.listModel.findByIdAndDelete({_id: id});
    if(!record){
      throw new NotFoundException("No record match");
    }

    return {
      success: true,
      message: 'Successfully deleted list',
    };
  }
}
