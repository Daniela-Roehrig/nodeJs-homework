import { Router } from "express";
import { getBooksController, addBookController, updateBookController, destroyBookController } from "../controllers/books.controllers.js";



const booksRouter = Router();

booksRouter.get("/",  getBooksController)

booksRouter.post("/", addBookController)

booksRouter.put("/:id", updateBookController)

booksRouter.delete("/:id", destroyBookController)

export default booksRouter;
