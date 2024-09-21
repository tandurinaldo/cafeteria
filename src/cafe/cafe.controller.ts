import { Controller, Get, Post, Body } from '@nestjs/common';
import { CafeService } from './cafe.service';

@Controller('cafes')
export class CafeController {
  constructor(private readonly cafeService: CafeService) {}

  @Post()
  async create(@Body() body: { name: string; address: string; phoneNumber: string }) {
    return this.cafeService.create(body.name, body.address, body.phoneNumber);
  }

  @Get()
  async findAll() {
    return this.cafeService.findAll();
  }
}
