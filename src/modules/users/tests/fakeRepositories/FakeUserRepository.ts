import { v4 as uuid } from 'uuid';

import IUserRepository from '@modules/users/repositories/IUserRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '@modules/users/infra/prisma/models/User';

class FakeUserRepository implements IUserRepository {
  private users: User[] = [];

  public async findAll(): Promise<User[]> {
    return this.users;
  }

  public async findById(id: string): Promise<User | null> {
    const findUser = this.users.find(user => user.id === id);

    return findUser || null;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const findUser = this.users.find(user => user.email === email);

    return findUser || null;
  }

  public async create({ email, password, name }: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { id: uuid(), email, password, name });

    this.users.push(user);

    return user;
  }

  public async update(user: User): Promise<User> {
    const index = this.users.findIndex(findUser => findUser.id === user.id);

    this.users[index] = user;

    return user;
  }

  public async delete(id: string): Promise<User> {
    const index = this.users.findIndex(findUser => findUser.id === id);
    const user = this.users[index];

    this.users.splice(index, 1);

    return user;
  }
}

export default FakeUserRepository;
