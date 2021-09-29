/// <reference types="mongoose" />
import { ListService } from './list.service';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
export declare class ListController {
    private readonly listService;
    constructor(listService: ListService);
    create(createListDto: CreateListDto): Promise<import("./entities/list.entity").List>;
    findAll(): Promise<(import("./entities/list.entity").List & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findOne(id: string): Promise<import("./entities/list.entity").List & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(id: string, updateListDto: UpdateListDto): Promise<import("./entities/list.entity").List & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
