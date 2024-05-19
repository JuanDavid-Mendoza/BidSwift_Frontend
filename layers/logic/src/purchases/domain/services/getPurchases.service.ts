import GetPurchasesMysql from '../../infra/getPurchases.mysql';
import PurchaseModel from '../models/purchase.model';

export default class GetPurchasesService {
  public constructor(private getPurchases: GetPurchasesMysql) {}

  public async getByAccountId(accountId: number): Promise<PurchaseModel[]> {
    const purchases = await this.getPurchases.getByAccountId(accountId);
    const images = await this.getPurchases.getImageByProductId(purchases.map(p => p.productId).join(','));

    purchases.forEach(p => {
      const image = images.find(i => i.productId == p.productId);
      p.productImage = image.url;
    });

    return purchases;
  }
}
