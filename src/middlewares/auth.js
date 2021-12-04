import ApiError from "../helpers/ApiError";
import jwt from 'jsonwebtoken';

const isAuth = async (req, res, next) => {
    try{
        const authorization = req.headers["authorization"]
        if(!authorization) 
            throw new ApiError(401, 'misssing token');

        const token = authorization.split('')[1];

        const token = await jwt.verify(token, env.jwt_secret);
        
        if(!token)
        req.userID = decoded.id;

    }catch (error) {
        res.status(401).json('Your not authorized');
    }
}
export default isAuth;