import { Request, Response } from 'express';
import UsersApp from '../../../src/users/app/users.app';

export default class UserController {
  public async createUser(req: Request, res: Response) { 
    try {
      const users: UsersApp = new UsersApp();
      const data = await users.create(req.body);
      return data ? res.status(200).json(data) : res.status(200).json();
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }

  public async updateUser(req: Request, res: Response) { 
    try {
      const users: UsersApp = new UsersApp();
      const data = await users.update(req.body);
      return data ? res.status(200).json(data) : res.status(200).json();
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }

  public async logIn(req: Request, res: Response) {
    try {
      const params = req.query as any || {};
      const users: UsersApp = new UsersApp();
      const data = await users.logIn(params.email, params.password);
      return data ? res.status(200).json(data) : res.status(200).json();
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }

  public async userExists(req: Request, res: Response) {
    try {
      const params = req.query as any || {};
      const users: UsersApp = new UsersApp();
      const data = await users.exists(params.email);
      return res.status(200).json(data);
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }
}
