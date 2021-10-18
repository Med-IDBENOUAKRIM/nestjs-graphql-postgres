import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonDTO } from './dto/create-person.dto';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person) private personRepository: Repository<Person>,
  ) {}

  async getAll(): Promise<Person[]> {
    return this.personRepository.find();
  }

  async createPerson(person: CreatePersonDTO): Promise<Person> {
    const newPerson = await this.personRepository.create(person);
    await this.personRepository.save(newPerson);
    return newPerson;
  }
}
