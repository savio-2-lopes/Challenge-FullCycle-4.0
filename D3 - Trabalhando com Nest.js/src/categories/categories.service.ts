import { UpdateResult, DeleteResult } from  'typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './categoria.entity';

@Injectable()
export class CategoriesService {
    async  findAll(): Promise<Categoria[]> {
        return await this.categoriaRepository.find();
    }

    async  create(categoria: Categoria): Promise<Categoria> {
        return await this.categoriaRepository.save(categoria);
    }

    async update(categoria: Categoria): Promise<UpdateResult> {
        return await this.categoriaRepository.update(categoria.id, categoria);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.categoriaRepository.delete(id);
    }
    
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>,
    ) { }
}
