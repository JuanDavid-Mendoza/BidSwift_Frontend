import GetPurchasesMysql from '../../infra/getPurchases.mysql';
import PurchaseModel from '../models/purchase.model';

export default class GetPurchasesService {
  public constructor(private getPurchases: GetPurchasesMysql) {}

  public async getByAccountId(accountId: number): Promise<PurchaseModel[]> {
    const Purchases: PurchaseModel[] = await this.getPurchases.getByAccountId(accountId);
    return Purchases;
  }
}
