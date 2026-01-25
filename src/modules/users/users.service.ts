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
  }
]

@Injectable()
export class UsersService {
  private readonly TOKEN_KEY = 'access_token';

  async findUserByName(username: string): Promise<any | undefined> {
    return users.find((user) => user.username === username);
  }
}
