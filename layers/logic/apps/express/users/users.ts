import { Request, Response } from 'express';
import CrudUsersApp from '../../../src/users/app/users.app';

export default class UserController {
  public async createUser(req: Request, res: Response) { 
    try {
      const crudUsers: CrudUsersApp = new CrudUsersApp();
      const data = await crudUsers.create(req.body);
      return data ? res.status(200).json(data) : res.status(200).json();
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }

  public async updateUser(req: Request, res: Response) { 
    try {
      const crudUsers: CrudUsersApp = new CrudUsersApp();
      const data = await crudUsers.update(req.body);
      return data ? res.status(200).json(data) : res.status(200).json();
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }

  public async logIn(req: Request, res: Response) {
    try {
      const params = req.query as any || {};
      const crudUsers: CrudUsersApp = new CrudUsersApp();
      const data = await crudUsers.logIn(params.email, params.password);
      return data ? res.status(200).json(data) : res.status(200).json();
    } catch (e) {
      return res.status(500).json({ error: e });
    }
  }
}
