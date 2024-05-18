import AuctionModel from '../domain/models/bid.model';
import PersistAuctionService from '../domain/services/persistBid.service';
import GetAuctionsService from '../domain/services/getBids.service';
import PersistAuctionMysql from '../infra/persistBid.mysql';
import GetAuctionsMysql from '../infra/getBids.mysql';

export default class CrudAuctionsApp {
  public async create(data: AuctionModel) {
    const persistAuctionService: PersistAuctionService = new PersistAuctionService(
      new PersistAuctionMysql(),
      new GetAuctionsMysql(),
    );

    return persistAuctionService.create(data);
  }

  public async getByAuctionId(auctionId: number) {
    const getAuctionsService: GetAuctionsService = new GetAuctionsService(new GetAuctionsMysql());
    return getAuctionsService.getByAuctionId(auctionId);
  }
}
