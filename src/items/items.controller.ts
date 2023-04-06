import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { ItemDto } from './item.dto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post('/add')
  addItems(@Body() dto: ItemDto) {
    this.itemsService.addItems(dto);
  }
  @Get()
  getAllItems() {
    return this.itemsService.getAllItems();
  }
  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.itemsService.getById(id);
  }
  @Get('/type/:type')
  getByType(@Param('type') type: string) {
    return this.itemsService.getByType(type);
  }
  @Get('/slug/:slug')
  getBySlug(@Param('slug') slug: string) {
    return this.itemsService.getBySlug(slug);
  }
}
