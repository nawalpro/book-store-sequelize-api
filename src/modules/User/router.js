import { Router } from 'express';
import UserController from './controller';

const UserRouter = Router();

UserRouter
    .route('/users');
UserRouter.post(UserController.register);
// UserRouter.route('/users/auth').post(UserController.login);

export default UserRouter;
