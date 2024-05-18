import GetBidsMysql from '../../infra/getBids.mysql';
import BidModel from '../models/bid.model';

export default class GetBidsService {
  public constructor(private getBids: GetBidsMysql) {}

  public async getByAuctionId(auctionId: number): Promise<BidModel[]> {
    const bids: BidModel[] = await this.getBids.getByAuctionId(auctionId);
    return bids;
  }
}
