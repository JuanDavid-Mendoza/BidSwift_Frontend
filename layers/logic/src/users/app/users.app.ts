import UserModel from '../domain/models/user.model';
import PersistUserService from '../domain/services/persistUser.service';
import GetUsersService from '../domain/services/getUsers.service';
import PersistUserMysql from '../infra/persistUser.mysql';
import GetUsersMysql from '../infra/getUsers.mysql';

export default class UsersApp {
  public async create(data: UserModel) {
    const persistUserService: PersistUserService = new PersistUserService(
      new PersistUserMysql(),
      new GetUsersMysql(),
    );

    return persistUserService.create(data);
  }

  public async logIn(email: string, password: string) {
    const getUsersService: GetUsersService = new GetUsersService(new GetUsersMysql());
    return getUsersService.logIn(email, password);
  }

  public async exists(email: string) {
    const getUsersService: GetUsersService = new GetUsersService(new GetUsersMysql());
    return getUsersService.exists(email);
  }

  public async update(data: UserModel) {
    const persistUserService: PersistUserService = new PersistUserService(
      new PersistUserMysql(),
      new GetUsersMysql(),
    );

    return persistUserService.update(data);
  }
}
