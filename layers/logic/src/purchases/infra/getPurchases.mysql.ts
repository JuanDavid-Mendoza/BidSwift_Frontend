import PurchaseModel from '../domain/models/purchase.model';
import DBConnection from '../../shared/postgre/db.postgre';

export default class GetPurchasesMysql {
  async getByAccountId(accountId: number): Promise<PurchaseModel[]> {
    const purchases: PurchaseModel[] = await DBConnection.getInstance().executeQuery(
      `SELECT p.*, u.names userNames, u.lastnames userLastNames, u.email userEmail FROM "Purchase" p
        INNER JOIN "Account" a ON a.id = p.accountid
        INNER JOIN "User" u ON u.id = a.userid
        WHERE accountid = ${accountId}`
    ).then(r => r.rows);

    return purchases;
  }
}
