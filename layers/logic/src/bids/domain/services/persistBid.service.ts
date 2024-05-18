import BidModel from '../models/bid.model';
import PersistBidMysql from '../../infra/persistBid.mysql';
import GetBidsMysql from '../../infra/getBids.mysql';

export default class PersistBidService {
  public constructor(
    private persistBid: PersistBidMysql,
    private getBids: GetBidsMysql,
  ) {}

  public async create(data: BidModel): Promise<number> {
    const createdBid: number = await this.persistBid.create(data);
    return createdBid;
  }
}
