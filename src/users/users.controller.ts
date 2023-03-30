import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './user.entity/user.entity';
import { CreateUserDto } from 'src/dto/userDto';

@Controller('users')
export class UsersController {
    constructor(private service: UsersService){}

    @Get(':id')
    get(@Param() params) {
        return this.service.getOneUser(params.id)
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.service.create(createUserDto)
    }

    @Put()
    update(@Body() user: UserEntity) {
        return this.service.updateUser(user)
    }

    @Delete(':id')
    deliteUser(@Param() params) {
        return this.service.deleteUser(params.id)
    }
}
