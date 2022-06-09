import { User } from '@prisma/client';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

export default interface IUserRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findAll(): Promise<User[]>;
  create(data: ICreateUserDTO): Promise<User>;
  delete(id: string): Promise<User>;
}
