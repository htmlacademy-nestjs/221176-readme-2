import { Injectable } from '@nestjs/common';
import { User } from '@readme/shared-types';
import { BlogUserMemoryRepository } from '../blog-user/blog-user-memory.repository';
import { BlogUserEntity } from '../blog-user/blog-user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly blogUserRepository: BlogUserMemoryRepository
  ) {}

  async register(dto: CreateUserDto) {
    const { email, name, password } = dto;
    const blogUser: User = {
      _id: '',
      email,
      name,
      avatar: '',
      passwordHash: ''
    }

    const existUser = await this.blogUserRepository.findByEmail(email);

    if (existUser) {
      throw new Error('User already exists');
    }

    const userEntity = new BlogUserEntity(blogUser);
    await userEntity.setPassword(password);

    return this.blogUserRepository.create(userEntity);

  }
}
