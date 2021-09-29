import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { List, ListDocument } from './entities/list.entity';
import { Model } from 'mongoose';
export declare class ListService {
    private listModel;
    constructor(listModel: Model<ListDocument>);
    create(createListDto: CreateListDto): Promise<List>;
    findAll(): Promise<(List & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findOne(id: string): Promise<List & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(id: string, updateListDto: UpdateListDto): Promise<List & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
