import { Router } from 'express';
import BidController from './bids';

/* Bids */
const bidController: BidController = new BidController();

const bidRouter: Router = Router();
const bidsPath: string = '/bids';

/* Bids */
bidRouter.post(`${bidsPath}/create`, bidController.createBid);
bidRouter.get(`${bidsPath}/getByAuctionId`, bidController.getByAuctionId);

export { bidRouter };