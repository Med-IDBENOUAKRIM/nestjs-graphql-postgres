import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePersonDTO } from './dto/create-person.dto';
import { Person } from './entities/person.entity';
import { PersonService } from './person.service';

@Resolver(() => Person)
export class PersonResolver {
  constructor(private personService: PersonService) {}

  @Query(() => [Person], { name: 'getAllPersons' })
  getAll() {
    return this.personService.getAll();
  }

  @Mutation(() => Person, { name: 'createPerson' })
  createOne(@Args('person') person: CreatePersonDTO) {
    return this.personService.createPerson(person);
  }
}
