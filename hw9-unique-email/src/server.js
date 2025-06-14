import express from "express";
import cors from "cors";

import notFoundHandler from "./middlewares/notFoundHandler.js";
import errorHandler from "./middlewares/errorHandler.js";

import authRouter from "./routes/auth.router.js";
import adminRouter from "./routes/admin.router.js"; // <--- hinzugefügt

const startServer = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use("/api", authRouter);
    app.use("/api/admin", adminRouter); 

    app.use(notFoundHandler);
    app.use(errorHandler);

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Server running on ${port} port`));
};

export default startServer;
