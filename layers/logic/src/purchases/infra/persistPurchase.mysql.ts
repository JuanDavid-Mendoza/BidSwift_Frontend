import DBConnection from '../../shared/postgre/db.postgre';
import PurchaseModel from '../domain/models/purchase.model';

export default class PersistPurchaseMysql {
  public async create(data: PurchaseModel): Promise<number> {
    const createdPurchase = await DBConnection.getInstance().executeQuery(
      `INSERT INTO "Purchase" (finalvalue, purchasedate, accountid, auctionid)
        VALUES (${data.finalValue}, '${data.purchaseDate}', ${data.accountId}, ${data.auctionId}) 
        RETURNING id`,
    ).then(r => r.rows[0]);

    return createdPurchase.id;
  }
}
