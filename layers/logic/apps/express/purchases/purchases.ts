import { Request, Response } from 'express';
import CrudPurchasesApp from '../../../src/Purchases/app/Purchases.app';

export default class PurchaseController {
  public async createPurchase(req: Request, res: Response) { 
    try {
      const crudPurchases: CrudPurchasesApp = new CrudPurchasesApp();
      const data = await crudPurchases.create(req.body);
      return data ? res.status(200).json(data) : res.status(200).json();
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  };
  public async getByAccountId(req: Request, res: Response) {
    try {
      const params = req.query as any || {};
      const crudPurchases: CrudPurchasesApp = new CrudPurchasesApp();
      const data = await crudPurchases.getByAccountId(params.accountId);
      return data ? res.status(200).json(data) : res.status(200).json();
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  };
}
