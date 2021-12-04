import { Router } from "express";
import UserController from "./controller";
import User from "./model";

const UserRouter = Router();
const entrypoint = '/users';

UserRouter.route(`${entrypoint}`)
    .post(UserController.register)
    .get(UserController.getAll);

export default UserRouter;


