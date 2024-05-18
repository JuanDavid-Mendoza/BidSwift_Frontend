import DBConnection from '../../shared/postgre/db.postgre';
import BidModel from '../domain/models/bid.model';

export default class PersistBidMysql {
  public async create(data: BidModel): Promise<number> {
    const createdBid = await DBConnection.getInstance().executeQuery(
      `INSERT INTO "Bid" (bidvalue, biddate, accountid, auctionid)
        VALUES (${data.bidValue}, '${data.bidDate}', ${data.accountId}, ${data.auctionId}) 
        RETURNING id`,
    ).then(r => r.rows[0]);

    return createdBid.id;
  }
}
