import express, { Request, Response } from "express";
import { BookController } from "./database/controllers/bookController";

const routes = express.Router();

const bookController = new BookController;

routes.post("/addbook", bookController.create);
routes.get("/books", bookController.getAll);
routes.get("/book/", bookController.getOne);
routes.put("/book", bookController.update);

export {routes};