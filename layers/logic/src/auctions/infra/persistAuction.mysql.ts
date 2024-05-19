import DBConnection from '../../shared/postgre/db.postgre';
import AuctionModel from '../domain/models/auction.model';
import ProductModel from '../domain/models/product.model';

export default class PersistAuctionMysql {
  public async create(data: AuctionModel): Promise<number> {
    data.endDate = data.endDate ? `${data.endDate}` : 'NULL';

    const createdAuction = await DBConnection.getInstance().executeQuery(
      `INSERT INTO "Auction" (startdate, enddate, timer, state, productid, ownerid)
        VALUES ('${data.startDate}', ${data.endDate}, ${data.timer}, 
          '${data.state}', ${data.productId}, ${data.ownerId}) RETURNING id`,
    ).then(r => r.rows[0]);

    return createdAuction.id;
  }

  public async update(data: AuctionModel): Promise<number> {
    const values: string[] = [];
    if (typeof data.startDate === 'string') values.push(` startdate = '${data.startDate}' `);
    if (typeof data.endDate === 'string') values.push(` enddate = '${data.endDate}' `);
    if (typeof data.timer === 'number') values.push(` timer = '${data.timer}' `);
    if (typeof data.state === 'string') values.push(` state = '${data.state}' `);

    await DBConnection.getInstance().executeQuery(
      `UPDATE "Auction" SET ${values.join(',')} WHERE id = ${data.id}`,
    );

    return data.id;
  }

  public async createProduct(data: ProductModel): Promise<number> {
    const createdProduct = await DBConnection.getInstance().executeQuery(
      `INSERT INTO "Product" (name, description, price, details)
        VALUES ('${data.name}', '${data.description}', ${data.price}, '${data.details || 'NULL'}')
        RETURNING id`,
    ).then(r => r.rows[0]);

    return createdProduct.id;
  }

  public async createImages(values: string): Promise<number> {
    const createdImage = await DBConnection.getInstance().executeQuery(
      `INSERT INTO "Image" (url, productid) VALUES ${values} RETURNING id`,
    ).then(r => r.rows[0]);

    return createdImage.id;
  }
}
