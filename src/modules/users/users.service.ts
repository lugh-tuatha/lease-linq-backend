import { Injectable } from '@nestjs/common';

const users: any[] = [
  {
    id: 1,
    username: 'richmondsquare',
    password: 'admin',
    role: 'admin',
  },
  {
    id: 2,
    username: 'guard',
    password: 'root',
    role: 'user',
  },
  {
    id: 3,
    username: 'richmondfinance',
    password: 'finance',
    role: 'thetaxman',
  },
]

@Injectable()
export class UsersService {
  async findUserByName(username: string): Promise<any | undefined> {
    return users.find((user) => user.username === username);
  }
}
