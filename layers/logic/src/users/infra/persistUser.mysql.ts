import DBConnection from '../../shared/postgre/db.postgre';
import AccountModel from '../domain/models/account.model';
import UserModel from '../domain/models/user.model';

export default class PersistUserMysql {
  async create(data: UserModel): Promise<number> {
    const createdUser = await DBConnection.getInstance().executeQuery(
      `INSERT INTO "User" (names, lastnames, email, password, birthDate, identification, address)
        VALUES ('${data.names}', '${data.lastNames}', '${data.email}', '${data.password}', '${data.birthDate}', 
          '${data.identification}', '${data.address}')`,
    );

    return createdUser.rowCount;
  }

  async update(data: UserModel): Promise<number> {
    const values: string[] = [];
    if (typeof data.names === 'string') values.push(` names = '${data.names}' `);
    if (typeof data.lastNames === 'string') values.push(` lastnames = '${data.lastNames}' `);
    if (typeof data.email === 'string') values.push(` email = '${data.email}' `);
    if (typeof data.password === 'string') values.push(` password = '${data.password}' `);
    if (typeof data.birthDate === 'string') values.push(` birthdate = '${data.birthDate}' `);
    if (typeof data.identification === 'string') values.push(` identification = '${data.identification}' `);
    if (typeof data.address === 'string') values.push(` address = '${data.address}' `);

    if (values.length) {
      const createdUser = await DBConnection.getInstance().executeQuery(
        `UPDATE "User" SET ${values.join(',')} WHERE id = ${data.id}`,
      );

      return createdUser.rowCount;
    }

    return 0;
  }

  async createAccount(userId: number): Promise<number> {
    const createdAccount = await DBConnection.getInstance().executeQuery(
      `INSERT INTO "Account" (status, reducedcost, balance, userid)
        VALUES (false, false, 0, ${userId})`,
    );

    return createdAccount.rowCount;
  }

  async updateAccount(data: AccountModel): Promise<number> {
    const values: string[] = [];
    if (typeof data.status === 'boolean') values.push(` status = ${data.status} `);
    if (typeof data.reducedCost === 'boolean') values.push(` reducedcost = ${data.reducedCost} `);
    if (typeof data.balance === 'number') values.push(` balance = ${data.balance} `);

    if (values.length) {
      const createdAccount = await DBConnection.getInstance().executeQuery(
        `UPDATE "Account" SET ${values.join(',')} WHERE id = ${data.id}`,
      );

      return createdAccount.rowCount;
    }

    return 0;
  }
}
