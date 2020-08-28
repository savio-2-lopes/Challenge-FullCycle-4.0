import { Post,Put, Delete, Body, Param } from  '@nestjs/common';
import { Categoria } from '../categoria.entity';
import { CategoriesService } from '../categories.service';
import { Controller, Get } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService){}

    @Get()
    index(): Promise<Categoria[]> {
      return this.categoriesService.findAll();
    }   
    
    @Post('create')
    async create(@Body() categoriaData: Categoria): Promise<any> {
      return this.categoriesService.create(categoriaData);
    }  

    @Put(':id/update')
    async update(@Param('id') id, @Body() categoriaData: Categoria): Promise<any> {
        categoriaData.id = Number(id);
        console.log('Update #' + categoriaData.id)
        return this.categoriesService.update(categoriaData);
    }  

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.categoriesService.delete(id);
    }  
}
