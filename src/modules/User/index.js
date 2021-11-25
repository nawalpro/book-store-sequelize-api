import router from "./router";
import UserController from "./controller";


const models = {};
const controller = new UserController(models);
const routes = router(controller);

export default routes;