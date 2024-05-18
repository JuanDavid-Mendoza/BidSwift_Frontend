import UserModel from '../models/user.model';
import PersistUserMysql from '../../infra/persistUser.mysql';
import GetUsersMysql from '../../infra/getUsers.mysql';

export default class PersistUserService {
  public constructor(
    private persistUser: PersistUserMysql,
    private getUsers: GetUsersMysql,
  ) {}

  public async create(data: UserModel): Promise<number> {
    const previous: UserModel = await this.getUsers.byEmail(data.email);
    if (previous) throw new Error('El correo ya existe en el sistema');
    const createdUser: number = await this.persistUser.create(data)

    const newUser: UserModel = await this.getUsers.byEmail(data.email);
    const createdAccount: number = await this.persistUser.createAccount(newUser.id);

    return createdUser + createdAccount;
  }
}
