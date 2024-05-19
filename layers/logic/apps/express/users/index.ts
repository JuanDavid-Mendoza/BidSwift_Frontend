import { Router } from 'express';
import UserController from './users'

/* Users */
const userController: UserController = new UserController()

const userRouter: Router = Router();
const usersPath: string = '/users';

/* Users */
userRouter.post(`${usersPath}/create`, userController.createUser);
userRouter.put(`${usersPath}/update`, userController.updateUser);
userRouter.get(`${usersPath}/logIn`, userController.logIn);
userRouter.get(`${usersPath}/exists`, userController.userExists);

export { userRouter };