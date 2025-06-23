import express from "express";
import cors from "cors";

import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";
import publisherRouter from "./routers/publisher.router.js";
import magazineRouter from "./routers/magazine.router.js";
import articleRouter from "./routers/article.router.js";
import tagRouter from "./routers/tag.router.js";

const startServer = ()=> {
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use("/api/publishers", publisherRouter)
    app.use("/api/magazines", magazineRouter)
    app.use("/api/articles", articleRouter)
    app.use("/api/tags", tagRouter)

    app.use(notFoundHandler);
    app.use(errorHandler);

    const port = process.env.PORT || 3000;

    app.listen(port, ()=> console.log(`Server running on ${port} port`));
}

export default startServer;