import { Request, Response } from 'express';
import CrudAuctionsApp from '../../../src/Auctions/app/Auctions.app';

export default class AuctionController {
  public async createAuction(req: Request, res: Response) { 
    try {
      const crudAuctions: CrudAuctionsApp = new CrudAuctionsApp();
      const data = await crudAuctions.create(req.body);
      return data ? res.status(200).json(data) : res.status(200).json();
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }

  public async updateAuction(req: Request, res: Response) { 
    try {
      const crudAuctions: CrudAuctionsApp = new CrudAuctionsApp();
      const data = await crudAuctions.update(req.body);
      return data ? res.status(200).json(data) : res.status(200).json();
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }

  public async getAll(req: Request, res: Response) {
    try {
      const crudAuctions: CrudAuctionsApp = new CrudAuctionsApp();
      const data = await crudAuctions.getAll();
      return data ? res.status(200).json(data) : res.status(200).json();
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }

  public async getByAccountId(req: Request, res: Response) {
    try {
      const params = req.query as any || {};
      const crudAuctions: CrudAuctionsApp = new CrudAuctionsApp();
      const data = await crudAuctions.getByAccountId(params.accountId);
      return data ? res.status(200).json(data) : res.status(200).json();
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }
}
