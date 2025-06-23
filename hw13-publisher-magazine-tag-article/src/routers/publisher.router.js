import { Router } from "express";

import { 
    getPublishersController, 
    getPublisherByIdController,
    addPublisherController,
    updatePublisherByIdController,
} from "../controllers/publisher.controller.js";

const publisherRouter = Router();

publisherRouter.get("/", getPublishersController);
publisherRouter.get("/:id", getPublisherByIdController);
publisherRouter.post("/", addPublisherController);
publisherRouter.put("/:id", updatePublisherByIdController);

export default publisherRouter;