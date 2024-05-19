import { Request, Response } from 'express';
import AuctionsApp from '../../../src/auctions/app/auctions.app';

export default class AuctionController {
  public async createAuction(req: Request, res: Response) { 
    try {
      const auctions: AuctionsApp = new AuctionsApp();
      const data = await auctions.create(req.body);
      return data ? res.status(200).json(data) : res.status(200).json();
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }

  public async updateAuction(req: Request, res: Response) { 
    try {
      const auctions: AuctionsApp = new AuctionsApp();
      const data = await auctions.update(req.body);
      return data ? res.status(200).json(data) : res.status(200).json();
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }

  public async getAll(req: Request, res: Response) {
    try {
      const params = req.query as any || {};
      const auctions: AuctionsApp = new AuctionsApp();
      const data = await auctions.getAll(params.state);
      return data ? res.status(200).json(data) : res.status(200).json();
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }

  public async getByAccountId(req: Request, res: Response) {
    try {
      const params = req.query as any || {};
      const auctions: AuctionsApp = new AuctionsApp();
      const data = await auctions.getByAccountId(params.accountId);
      return data ? res.status(200).json(data) : res.status(200).json();
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }
}
