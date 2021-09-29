import { Document } from "mongoose";
export declare type ListDocument = List & Document;
export declare class List {
    name: string;
    cards: string;
}
export declare const ListSchema: import("mongoose").Schema<Document<List, any, any>, import("mongoose").Model<Document<List, any, any>, any, any>, {}>;
