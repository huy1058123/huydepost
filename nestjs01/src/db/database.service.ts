import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
    findALL() {
        return 'Tìm tất cả';
    }
}