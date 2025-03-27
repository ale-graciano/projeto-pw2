import { Transform } from "class-transformer";
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateNoticeDto {
    @IsString({message: "Campo name deve ser uma string"})
    @IsNotEmpty()
    @Transform(({value}) => value.toUpperCase())
    readonly text: string;

    @IsString({message: "Campo name deve ser uma string"})
    @IsNotEmpty()
    @Transform(({value}) => value.toUpperCase())
    readonly from: string;

    @IsString({message: "Campo name deve ser uma string"})
    @IsNotEmpty()
    @Transform(({value}) => value.toUpperCase())
    readonly to: string;

    @IsBoolean()
    readonly read: boolean;
}