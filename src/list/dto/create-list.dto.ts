import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateListDto {
    @IsNotEmpty()
    @IsString()
    name: string;


    @IsOptional()
    @IsString()
    cards?: string;
}
