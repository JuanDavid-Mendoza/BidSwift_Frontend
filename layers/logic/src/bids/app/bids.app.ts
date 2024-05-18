import BidModel from '../domain/models/bid.model';
import PersistBidService from '../domain/services/persistBid.service';
import GetBidsService from '../domain/services/getBids.service';
import PersistBidMysql from '../infra/persistBid.mysql';
import GetBidsMysql from '../infra/getBids.mysql';

export default class CrudBidsApp {
  public async create(data: BidModel) {
    const persistBidService: PersistBidService = new PersistBidService(
      new PersistBidMysql(),
      new GetBidsMysql(),
    );

    return persistBidService.create(data);
  }

  public async getByAuctionId(auctionId: number) {
    const getBidsService: GetBidsService = new GetBidsService(new GetBidsMysql());
    return getBidsService.getByAuctionId(auctionId);
  }
}
