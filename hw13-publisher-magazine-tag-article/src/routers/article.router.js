import { Router } from "express";

import { 
    getArticlesController, 
    getArticleByIdController,
    addArticleController,
    updateArticleByIdController,
} from "../controllers/article.controller.js";

const atricleRouter = Router();

atricleRouter.get("/", getArticlesController);
atricleRouter.get("/:id", getArticleByIdController);
atricleRouter.post("/", addArticleController);
atricleRouter.put("/:id", updateArticleByIdController);

export default atricleRouter;