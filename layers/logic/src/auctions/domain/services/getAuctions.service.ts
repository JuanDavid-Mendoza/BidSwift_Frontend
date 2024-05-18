import GetAuctionsMysql from '../../infra/getAuctions.mysql';
import AuctionModel from '../models/auction.model';
import ProductModel from '../models/product.model';
import ImageModel from '../models/image.model';

export default class GetAuctionsService {
  public constructor(private getAuctions: GetAuctionsMysql) {}

  public async getAll(): Promise<AuctionModel[]> {
    const auctions: AuctionModel[] = await this.getAuctions.getAll();
    
    if (auctions.length) {
      const productIds: string = auctions.map(a => a.productId).join(',');
      const products: ProductModel[] = await this.getAuctions.getProductByIds(productIds);
      const images: ImageModel[] = await this.getAuctions.getImagesByProductIds(productIds);

      auctions.forEach(auction => {
        auction.product = products.find(p => p.id = auction.productId) as any;
        auction.product.images = images.filter(i => i.productId = auction.productId);
      });
    }

    return auctions;
  }
}
