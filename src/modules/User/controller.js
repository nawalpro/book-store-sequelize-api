import ApiError from "../../helpers/ApiError";

class UserController {
    #models;
    constructor(models) {
        this.#models = models;
    }

    login = async (req, res, next) => {
        try {
            // const newUser = await this.#models.User.findOne()
            if (false)
                throw new ApiError('error message', 403)
        } catch (error) {
            next(erpp);
        }
    }
}