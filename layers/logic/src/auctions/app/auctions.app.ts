import AuctionModel from '../domain/models/auction.model';
import PersistAuctionService from '../domain/services/persistAuction.service';
import GetAuctionsService from '../domain/services/getAuctions.service';
import PersistAuctionMysql from '../infra/persistAuction.mysql';
import GetAuctionsMysql from '../infra/getAuctions.mysql';

export default class CrudAuctionsApp {
  public async create(data: AuctionModel) {
    const persistAuctionService: PersistAuctionService = new PersistAuctionService(
      new PersistAuctionMysql(),
      new GetAuctionsMysql(),
    );

    return persistAuctionService.create(data);
  }

  public async getAll() {
    const getAuctionsService: GetAuctionsService = new GetAuctionsService(new GetAuctionsMysql());
    return getAuctionsService.getAll();
  }
}