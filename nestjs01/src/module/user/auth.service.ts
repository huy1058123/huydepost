import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService{
    //Tạo hàm login
    login(){
        return 'Login';
    }
}