import { Router } from 'express';
import PurchaseController from './purchases';

/* Purchases */
const purchaseController: PurchaseController = new PurchaseController();

const purchaseRouter: Router = Router();
const purchasesPath: string = '/purchases';

/* Purchases */
purchaseRouter.post(`${purchasesPath}/create`, purchaseController.createPurchase);
purchaseRouter.get(`${purchasesPath}/getByAccountId`, purchaseController.getByAccountId);

export { purchaseRouter };