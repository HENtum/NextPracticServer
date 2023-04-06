import { PrismaService } from 'src/prisma.service';
import { ItemDto } from './item.dto';
export declare class ItemsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    addItems(dto: ItemDto): Promise<import(".prisma/client").Item>;
    getAllItems(): Promise<import(".prisma/client").Item[]>;
    getById(id: number): Promise<import(".prisma/client").Item>;
    getByType(type: string): Promise<import(".prisma/client").Item[]>;
    getBySlug(slug: string): Promise<import(".prisma/client").Item>;
}
