import ApiError from "../../helpers/ApiError";
import User from "./model";
class UserController {
    #models;
    constructor(models) {
        this.#models = models;
    }
    
    register = async (req, res, next) => {
        try {
            const user = await User.create({ ...req.body });
            res.status(201).json(user);
        } catch (err) {
            next(err);
        }
    }


    // login = async (req, res, next) => {
    //     try {
    //         // const newUser = await this.#models.User.findOne()
    //         if (true)
    //             throw new ApiError('error message', 403);
            
    //         res.status(200).json('youpi');

    //     } catch (error) {
    //         next(error);
    //     }
    // }
}


export default UserController;