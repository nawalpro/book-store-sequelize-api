import { Router } from "express";

export default (controller) => {
    
    const router = Router();
    
    router.route('/auth').post(controller.login);

    return router;
}
