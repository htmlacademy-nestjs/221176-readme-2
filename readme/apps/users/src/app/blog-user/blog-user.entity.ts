import {User} from '@readme/shared-types';
import {compare, genSalt, hash} from 'bcrypt';

const SALT_ROUNDS = 10;

export class BlogUserEntity implements User {
  public _id: string;
  public email: string;
  public name: string;
  public avatar: string;
  public passwordHash: string;

  constructor(blogUser: User) {
    this.fillEntity(blogUser);
  }

  public toObject() {
    return {...this};
  }

  public async setPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }

  public fillEntity(blogUser: User) {
    this.email = blogUser.email;
    this.name = blogUser.name;
    this.avatar = blogUser.avatar;
    this.passwordHash = blogUser.passwordHash;
  }
}
