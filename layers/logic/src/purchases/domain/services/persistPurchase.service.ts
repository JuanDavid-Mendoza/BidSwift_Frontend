import PurchaseModel from '../models/purchase.model';
import PersistPurchaseMysql from '../../infra/persistPurchase.mysql';
import GetPurchasesMysql from '../../infra/getPurchases.mysql';

export default class PersistPurchaseService {
  public constructor(
    private persistPurchase: PersistPurchaseMysql,
    private getPurchases: GetPurchasesMysql,
  ) {}

  public async create(data: PurchaseModel): Promise<number> {
    const createdPurchase: number = await this.persistPurchase.create(data);
    return createdPurchase;
  }
}
