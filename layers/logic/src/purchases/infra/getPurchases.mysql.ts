import PurchaseModel from '../domain/models/purchase.model';
import DBConnection from '../../shared/postgre/db.postgre';

export default class GetPurchasesMysql {
  async getByAccountId(accountId: number): Promise<any[]> {
    const purchases: PurchaseModel[] = await DBConnection.getInstance().executeQuery(
      `SELECT p.*, u.names userNames, u.lastnames userLastNames, u.email userEmail, auc.startdate "startDate",
        pr.name "productName", pr.description "productDescription", pr.price "productPrice", pr.id "productId"
        FROM "Purchase" p
        INNER JOIN "Account" a ON a.id = p.accountid
        INNER JOIN "User" u ON u.id = a.userid
        INNER JOIN "Auction" auc ON auc.id = p.auctionid
        INNER JOIN "Product" pr ON pr.id = auc.productid
        WHERE accountid = ${accountId}`,
    ).then(r => r.rows);

    return purchases;
  }

  async getImageByProductId(productIds: string): Promise<any[]> {
    const image = await DBConnection.getInstance().executeQuery(
      `SELECT *, productid "productId" FROM "Image" WHERE productid in (${productIds}) ORDER BY ID`,
    ).then(r => r.rows);

    return image;
  }
}
