import { ItemDto } from './item.dto';
import { ItemsService } from './items.service';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    addItems(dto: ItemDto): void;
    getAllItems(): Promise<import(".prisma/client").Item[]>;
    getById(id: number): Promise<import(".prisma/client").Item>;
    getByType(type: string): Promise<import(".prisma/client").Item[]>;
    getBySlug(slug: string): Promise<import(".prisma/client").Item>;
}
