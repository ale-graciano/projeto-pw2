import { Injectable } from '@nestjs/common';
import { NoticeEntity } from './entities/notice.entity';
import { CreateNoticeDto } from './dto/create.notice';

@Injectable()
export class NoticeService {

    private lastid = 1;

    private notices: NoticeEntity[] = [
            {
                id: 1, 
                text: 'Vassoura',
                from: '10.45',
                to: 'aaaa',
                read: false,
                date: new Date('2025-03-26')
            }
        ]

    findAll() {
        return {message: "Todos as notícias"};
    }

    findOne(id: string) {
        return {message: `Valor recebido é ${id}`};
    }

    update(body: any) {
        return body;
    }

    delete(id: string) {
        return {message: `Notícia ${id} excluído com sucesso`};
    }

    create(createNoticeDto: CreateNoticeDto) {
            this.lastid ++;
            const id = this.lastid;
            const newNotice = {
                id,
                ...createNoticeDto,
                date: new Date('2025-03-26')
            };
            this.notices.push(newNotice);
    
            return {message: `Noticia ${id} cadastrado`}
        }
}
