import { Router } from "express";

import { 
    getTagsController, 
    getTagByIdController,
    addTagController,
    updateTagByIdController,
} from "../controllers/tag.controller.js";

const tagRouter = Router();

tagRouter.get("/", getTagsController);
tagRouter.get("/:id", getTagByIdController);
tagRouter.post("/", addTagController);
tagRouter.put("/:id", updateTagByIdController);

export default tagRouter;