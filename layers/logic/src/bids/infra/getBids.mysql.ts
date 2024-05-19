import BidModel from '../domain/models/bid.model';
import DBConnection from '../../shared/postgre/db.postgre';

export default class GetBidsMysql {
  async getByAuctionId(auctionId: number): Promise<BidModel[]> {
    const bids: BidModel[] = await DBConnection.getInstance().executeQuery(
      `SELECT b.*, u.names userNames, u.lastnames userLastNames, u.email userEmail FROM "Bid" b
        INNER JOIN "Account" a ON a.id = b.accountid
        INNER JOIN "User" u ON u.id = a.userid
        WHERE auctionid = ${auctionId} ORDER BY id`
    ).then(r => r.rows);

    return bids;
  }
}
