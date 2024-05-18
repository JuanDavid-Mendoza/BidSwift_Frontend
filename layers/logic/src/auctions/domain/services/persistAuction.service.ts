import AuctionModel from '../models/auction.model';
import PersistAuctionMysql from '../../infra/persistAuction.mysql';
import GetAuctionsMysql from '../../infra/getAuctions.mysql';

export default class PersistAuctionService {
  public constructor(
    private persistAuction: PersistAuctionMysql,
    private getAuctions: GetAuctionsMysql,
  ) {}

  public async create(data: AuctionModel): Promise<number> {
    const productId: number = await this.persistAuction.createProduct(data.product)
    data.productId = productId;
    const imagesValues: string = data.product.images.map(url => `('${url}', ${productId})`).join(',');

    const createdAuction: number = await this.persistAuction.create(data)
    await this.persistAuction.createImages(imagesValues);

    return createdAuction;
  }
}
