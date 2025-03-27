import { PartialType } from "@nestjs/mapped-types";
import { CreateNoticeDto } from "./create.notice";
import { IsNotEmpty } from "class-validator";

export class UpdateNoticeDto extends PartialType(CreateNoticeDto){
    @IsNotEmpty()
    readonly value: number;
}