import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UserEntity } from './users/user.entity/user.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'helytdf27',
    database: 'user_base',
    entities: [],
    synchronize: false
  }),
            UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
