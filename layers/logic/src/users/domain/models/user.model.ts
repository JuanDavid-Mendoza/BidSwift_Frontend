import AccountModel from "./account.model";

export default class UserModel {
  id: number;
  
  names: string;

  lastNames: string;

  email: string;

  password: string;

  birthDate: string;

  identification: string;

  address: string;

  account: AccountModel;
}
