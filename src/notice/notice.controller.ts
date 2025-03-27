import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { NoticeService } from './notice.service';
import { CreateNoticeDto } from './dto/create.notice';

@Controller('notice')
export class NoticeController {
    constructor(private readonly noticeService: NoticeService){};

        @Get()
        findAll() {
            return this.noticeService.findAll();
        }
    
        @Get(':id')
        findOne(@Param('id') id:string) {
            return this.noticeService.findOne(id);
        }
        
        @Post()
        create(@Body() createNoticeDto: CreateNoticeDto): any{
            return this.noticeService.create(createNoticeDto);
        }
    
        @Put(':id')
        update(@Param('id') id: string, @Body() body: any) {
            return this.noticeService.update(body);
        } 
    
        @Delete(':id')
        delete(@Param('id') id: string) {
            return this.noticeService.delete(id);
        }
}
