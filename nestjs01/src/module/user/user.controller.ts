import { UserService } from './user.service';
import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
//Import them AuthService
import { AuthService } from './auth.service';
import { Param } from '@nestjs/common/decorators';

@Controller('user')
export class UserController {
    //Tạo hàm khởi tạo sử dụng 2 Service
    constructor(private readonly UserService: UserService, private readonly authService: AuthService){}
    @Get() //-> /user (đường dẫn trên trình duyệt)
    index(@Query() query: any){
        //return [this.UserService.getUsser(), this.authService.login()];
        return {
            keyword: query.keyword,
            category: query.category,
        }
    }

    // Tạo thêm các phương thức controler
    @Post() //->POST/user
    create(@Body() body: any){
        return body;
    }
    @Delete() //->DELETE/user
    delete(){
        return "XÓA"
    }
    //Tạo route động cùng tham số
    @Get ('/:id') 
    find(@Param('id') id:string){
        return 'User' + id;
    }
}