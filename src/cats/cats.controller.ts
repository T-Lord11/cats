import { Body, Controller, Delete, Get, Param, Post, Query, Req } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto'
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }

    @Post()
    create() {
        return this.catsService.create('cat');
    }

    @Get()
    findAll() {
        return this.catsService.findAll();
    }

    @Get(':Name')
    findbyName(@Param('Name') name: string) {
        return this.catsService.findbyName(name)
    }

}
