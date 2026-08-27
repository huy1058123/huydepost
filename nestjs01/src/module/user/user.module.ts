import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
//Import thêm AuthService
import { AuthService } from './auth.service';
import { DatabaseService } from 'src/db/database.service';

@Module({
  providers: [DatabaseService, UserService, AuthService],
  controllers: [UserController]
})
export class UserModule {}
