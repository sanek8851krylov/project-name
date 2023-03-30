import { Injectable,  Inject  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/userDto';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity/user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

    async getUsers (user:UserEntity): Promise<UserEntity[]> {
        return await this.userRepository.find()
    }

    async getOneUser (id:number): Promise<UserEntity[]> {
        return await this.userRepository.find({
            select: ['fullnName', 'birthday','isActive'],
            where:[{'id': id}]
        })
    }

    async updateUser(user:UserEntity) {
        this.userRepository.save(user)
    }

    async deleteUser(user:UserEntity) {
        this.userRepository.delete(user)
    }

    async create(createUserDto:CreateUserDto) {
        const newUser =  this.userRepository.create(createUserDto)
        this.userRepository.save(newUser)
    }
}
