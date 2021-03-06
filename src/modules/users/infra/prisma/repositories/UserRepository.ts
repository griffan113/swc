import prisma from '@shared/infra/prisma';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import User from '../models/User';

export default class UserRepository implements IUserRepository {
  public async findById(id: string): Promise<User | null> {
    const user = prisma.user.findUnique({ where: { id } });

    return user;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const user = prisma.user.findFirst({ where: { email } });

    return user;
  }

  public async findAll(): Promise<User[]> {
    const users = prisma.user.findMany();

    return users;
  }

  public async update({ id, ...data }: User): Promise<User> {
    const user = prisma.user.update({ where: { id }, data });

    return user;
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = await prisma.user.create({ data });

    return user;
  }

  public async delete(id: string): Promise<User> {
    const user = await prisma.user.delete({ where: { id } });

    return user;
  }
}
