import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cafe } from './cafe.entity';

@Injectable()
export class CafeService {
  constructor(
    @InjectRepository(Cafe)
    private cafeRepository: Repository<Cafe>,
  ) {}

  async create(name: string, address: string, phoneNumber: string) {
    const cafe = this.cafeRepository.create({ name, address, phoneNumber });
    return this.cafeRepository.save(cafe);
  }

  async findAll(): Promise<Cafe[]> {
    return this.cafeRepository.find();
  }
}
