import UserModel from '../domain/models/user.model';
import PersistUserService from '../domain/services/persistUser.service';
import GetUsersService from '../domain/services/getUsers.service';
import PersistUserMysql from '../infra/persistUser.mysql';
import GetUsersMysql from '../infra/getUsers.mysql';

export default class CrudUsersApp {
  public create(data: UserModel) {
    const persistUserService = new PersistUserService(
      new PersistUserMysql(),
      new GetUsersMysql(),
    );

    return persistUserService.create(data);
  }

  async logIn(email: string, password: string) {
    const getUsersService = new GetUsersService(new GetUsersMysql());
    return getUsersService.logIn(email, password);
  }
}
