import { Request, Response } from 'express';
import CrudBidsApp from '../../../src/bids/app/bids.app';

export default class BidController {
  public async createBid(req: Request, res: Response) { 
    try {
      const crudBids: CrudBidsApp = new CrudBidsApp();
      const data = await crudBids.create(req.body);
      return data ? res.status(200).json(data) : res.status(200).json();
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  };
  public async getByAuctionId(req: Request, res: Response) {
    try {
      const params = req.query as any || {};
      const crudBids: CrudBidsApp = new CrudBidsApp();
      const data = await crudBids.getByAuctionId(params.auctionId);
      return data ? res.status(200).json(data) : res.status(200).json();
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  };
}
