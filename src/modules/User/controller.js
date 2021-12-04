import ApiError from "../../helpers/ApiError";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "./model";

const UserController = {
  register: async (req, res, next) => {
    try {
      console.log("ca marche BODY", req.body);

      const { first_name, last_name, email, password } = req.body;
      const user = await User.create({
        first_name,
        last_name,
        email,
        password,
      });

      console.log("USER", user);

      res.status(201).json("youpi");
    } catch (err) {
      console.log("ERROOR REGISTER", err);
      next();
    }
  },

  getAll: async (req, res, next) => {
      try {
          const users = await User.findAll({});
          console.log("USERSSS", users);
          res.status(201).json(users);

      } catch (error) {
          console.error("Erroor GETALL", error);
      }
  },
};

export default UserController;
