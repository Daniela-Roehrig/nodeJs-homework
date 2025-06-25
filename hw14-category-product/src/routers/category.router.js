import { Router } from "express";

import { 
    addCategoryController,
} from "../controllers/category.controller.js";

const categoryRouter = Router();

categoryRouter.post("/", addCategoryController);


export default categoryRouter;