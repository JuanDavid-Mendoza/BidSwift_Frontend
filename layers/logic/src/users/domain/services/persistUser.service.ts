import UserModel from '../models/user.model';
import PersistUserMysql from '../../infra/persistUser.mysql';
import GetUsersMysql from '../../infra/getUsers.mysql';

export default class PersistUserService {
  constructor(
    private persistUser: PersistUserMysql,
    private getUsers: GetUsersMysql,
  ) {}

  async create(data: UserModel): Promise<number> {
    const previous = await this.getUsers.byEmail(data.email);
    if (previous) throw new Error('El correo ya existe en el sistema');
    const createdUser = await this.persistUser.create(data)

    const newUser = await this.getUsers.byEmail(data.email);
    const createdAccount = await this.persistUser.createAccount(newUser.id);

    return createdUser + createdAccount;
  }
}
