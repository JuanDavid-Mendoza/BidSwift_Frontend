import AuctionModel from '../domain/models/auction.model';
import ProductModel from '../domain/models/product.model';
import ImageModel from '../domain/models/image.model';
import DBConnection from '../../shared/postgre/db.postgre';

export default class GetAuctionsMysql {
  async getAll(state: string): Promise<AuctionModel[]> {
    const auxWhere = state ? ` WHERE state = '${state}' ` : '';

    const auction: AuctionModel[] = await DBConnection.getInstance().executeQuery(
      `SELECT *, productid as "productId" FROM "Auction" ${auxWhere}`
    ).then(r => r.rows);

    return auction;
  }

  async getByAccountId(accountId: number): Promise<AuctionModel[]> {
    const auction: AuctionModel[] = await DBConnection.getInstance().executeQuery(
      `SELECT *, productid as "productId" FROM "Auction" WHERE ownerid = ${accountId}`
    ).then(r => r.rows);

    return auction;
  }

  async getProductByIds(productIds: string): Promise<ProductModel[]> {
    const products: ProductModel[] = await DBConnection.getInstance().executeQuery(
      `SELECT * FROM "Product"
        WHERE id in (${productIds})`
    ).then(r => r.rows);

    return products;
  }

  async getImagesByProductIds(productIds: string): Promise<ImageModel[]> {
    const products: ImageModel[] = await DBConnection.getInstance().executeQuery(
      `SELECT *, productid as "productId" FROM "Image"
        WHERE productid in (${productIds}) ORDER BY id`
    ).then(r => r.rows);

    return products;
  }
}
