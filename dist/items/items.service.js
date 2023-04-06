"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ItemsService = class ItemsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async addItems(dto) {
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
    async getById(id) {
        return this.prisma.item.findUnique({
            where: {
                id: +id,
            },
        });
    }
    async getByType(type) {
        return this.prisma.item.findMany({
            where: {
                type,
            },
        });
    }
    async getBySlug(slug) {
        return this.prisma.item.findUnique({
            where: {
                slug: slug,
            },
        });
    }
};
ItemsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ItemsService);
exports.ItemsService = ItemsService;
//# sourceMappingURL=items.service.js.map