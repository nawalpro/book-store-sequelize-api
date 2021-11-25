import ApiError from "../../helpers/ApiError";

class UserController {
    #models;
    constructor(models) {
        this.#models = models;
    }

    login = async (req, res, next) => {
        try {
            // const newUser = await this.#models.User.findOne()
            if (true)
                throw new ApiError('error message', 403);
            
            res.status(200).json('youpi');

        } catch (error) {
            next(error);
        }
    }
}

export default UserController;