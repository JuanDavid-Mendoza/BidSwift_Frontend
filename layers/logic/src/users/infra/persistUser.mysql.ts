import DBConnection from '../../shared/postgre/db.postgre';
import UserModel from '../domain/models/user.model';

export default class PersistUserMysql {
  async create(data: UserModel): Promise<number> {
    const createdUser = await DBConnection.getInstance().executeQuery(
      `INSERT INTO "User" (names, lastnames, email, password, birthDate, identification, address)
        VALUES ('${data.names}', '${data.lastnames}', '${data.email}', '${data.password}', '${data.birthDate}', 
          '${data.identification}', '${data.address}')`,
    );

    return createdUser.rowCount;
  }

  async createAccount(userId: number): Promise<number> {
    const createdAccount = await DBConnection.getInstance().executeQuery(
      `INSERT INTO "Account" (status, reducedcost, balance, userid)
        VALUES (false, false, 0, ${userId})`,
    );

    return createdAccount.rowCount;
  }
}
