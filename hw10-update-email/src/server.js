import express from "express";
import cors from "cors"
import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";

import hwUserRouter from "./routers/hwUser.router.js";
import authRouter from "./routers/auth.router.js";

const startServer = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use("/api/user", hwUserRouter);
    app.use("/api/auth", authRouter);

    app.use(notFoundHandler);
    app.use(errorHandler);

    const port = process.env.Port || 3000;
    app.listen(port, () => console.log(`Server running on ${port} port`));

} 

export default startServer