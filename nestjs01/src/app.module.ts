import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './module/user/user.module';

@Module({
 imports: [
  TypeOrmModule.forRoot({
    type: 'mongodb',
    url: 'mongodb://loaclhost:27017/nest_typeorm_demo',
    synchronize: true,
    autoLoadEntities: true,
  })
  UersModule,
 ],
})
export class AppModule {}
