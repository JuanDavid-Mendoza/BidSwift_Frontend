import { Router } from 'express';
import AuctionController from './auctions';

/* Auctions */
const auctionController: AuctionController = new AuctionController();

const auctionRouter: Router = Router();
const auctionsPath: string = '/Auctions';

/* Auctions */
auctionRouter.post(`${auctionsPath}/create`, auctionController.createAuction);
auctionRouter.get(`${auctionsPath}/getAll`, auctionController.getAll);

export { auctionRouter };