import UserModel from '../domain/models/user.model';
import AccountModel from '../domain/models/account.model';
import DBConnection from '../../shared/postgre/db.postgre';

export default class GetUsersMysql {
  async byEmail(email: string): Promise<UserModel> {
    const user: UserModel = await DBConnection.getInstance().executeQuery(
      `SELECT * FROM "User"
        WHERE email = '${email}'`
    ).then(r => r.rows[0]);

    return user;
  }

  async byId(userId: number): Promise<UserModel> {
    const user: UserModel = await DBConnection.getInstance().executeQuery(
      `SELECT * FROM "User"
        WHERE id = ${userId}`
    ).then(r => r.rows[0]);

    return user;
  }

  async getAccount(userId: number): Promise<AccountModel> {
    const account: AccountModel = await DBConnection.getInstance().executeQuery(
      `SELECT * FROM "Account"
        WHERE userid = ${userId}`
    ).then(r => r.rows[0]);

    return account;
  }
}
