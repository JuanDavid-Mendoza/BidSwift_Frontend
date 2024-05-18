import GetUsersMysql from '../../infra/getUsers.mysql';
import AccountModel from '../models/account.model';
import UserModel from '../models/user.model';

export default class GetUsersService {
  constructor(private getUsers: GetUsersMysql) {}

  async logIn(email: string, password: string): Promise<UserModel> {
    const user: UserModel = await this.getUsers.byEmail(email);
    
    if(user && user.password === password) {
      const account: AccountModel = await this.getUsers.getAccount(user.id);
      user.account = account;
      
      return user;
    }

    return null as any;
  }
}
