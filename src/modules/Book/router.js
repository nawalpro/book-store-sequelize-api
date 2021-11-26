import { Router } from "express";
import BookController from "./controller";

const BookRouter = Router();

BookRouter.route("/books");

export default BookRouter;
