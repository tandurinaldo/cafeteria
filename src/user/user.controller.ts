import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRole } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() body: { username: string; fullname: string; password: string; role: UserRole }) {
    return this.userService.create(body.username, body.fullname, body.password, body.role);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }
}
