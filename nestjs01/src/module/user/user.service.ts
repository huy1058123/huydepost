import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/db/database.service';

@Injectable()
export class UserService {
    // Tạo Constructor
    constructor (private readonly db: DatabaseService){}
    //Tạo hàm getUsers
        getUsser(){
            return 'Hiện thị tất cả người dùng';
        }
} 