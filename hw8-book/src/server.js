import express from "express";
import cors from "cors";


import notFoundHandler from "./middlewares/notFoundHandler.js";
import booksRouter from "./routers/books.router.js";

const startServer = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use("/api/books", booksRouter)
    app.use(notFoundHandler);

    const port = process.env.PORT || 3000;
    app.listen(3000, () => console.log(`Server running on ${port} port`));
}

export default startServer