import { Controller, Get, Post, Body } from '@nestjs/common';
import { MenuService } from './menu.service';

@Controller('menus')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  async create(@Body() body: { name: string; price: number; isRecommendation: boolean }) {
    return this.menuService.create(body.name, body.price, body.isRecommendation);
  }

  @Get()
  async findAll() {
    return this.menuService.findAll();
  }
}
