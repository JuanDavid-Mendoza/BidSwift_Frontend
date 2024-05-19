import GetUsersMysql from '../../infra/getUsers.mysql';
import AccountModel from '../models/account.model';
import UserModel from '../models/user.model';

export default class GetUsersService {
  public constructor(private getUsers: GetUsersMysql) {}

  public async logIn(email: string, password: string): Promise<UserModel> {
    const user: UserModel = await this.getUsers.byEmail(email);
    
    if(user && user.password === password) {
      const account: AccountModel = await this.getUsers.getAccount(user.id);
      user.account = account;
      
      return user;
    }

    return null as any;
  }

  public async exists(email: string): Promise<boolean> {
    const user: UserModel = await this.getUsers.byEmail(email);
    return user ? true : false;
  }
}
