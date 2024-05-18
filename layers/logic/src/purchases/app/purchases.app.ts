import PurchaseModel from '../domain/models/purchase.model';
import PersistPurchaseService from '../domain/services/persistPurchase.service';
import GetPurchasesService from '../domain/services/getPurchases.service';
import PersistPurchaseMysql from '../infra/persistPurchase.mysql';
import GetPurchasesMysql from '../infra/getPurchases.mysql';

export default class CrudPurchasesApp {
  public async create(data: PurchaseModel) {
    const persistPurchaseService: PersistPurchaseService = new PersistPurchaseService(
      new PersistPurchaseMysql(),
      new GetPurchasesMysql(),
    );

    return persistPurchaseService.create(data);
  }

  public async getByAccountId(accountId: number) {
    const getPurchasesService: GetPurchasesService = new GetPurchasesService(new GetPurchasesMysql());
    return getPurchasesService.getByAccountId(accountId);
  }
}
