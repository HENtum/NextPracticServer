import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ItemDto } from './item.dto';

@Injectable()
export class ItemsService {
  constructor(private readonly prisma: PrismaService) {}
  async addItems(dto: ItemDto) {
    return this.prisma.item.create({
      data: {
        name: dto.name,
        images: dto.images,
        price: dto.price,
        description: dto.description,
        about: dto.about,
        type: dto.type,
        slug: dto.slug,
      },
    });
  }
  async getAllItems() {
    return this.prisma.item.findMany();
  }
  async getById(id: number) {
    return this.prisma.item.findUnique({
      where: {
        id: +id,
      },
    });
  }
  async getByType(type: string) {
    return this.prisma.item.findMany({
      where: {
        type,
      },
    });
  }
  async getBySlug(slug: string) {
    return this.prisma.item.findUnique({
      where: {
        slug: slug,
      },
    });
  }
}
