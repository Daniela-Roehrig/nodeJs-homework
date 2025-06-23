import { Router } from "express";

import { 
    getMagazinesController, 
    getMagazineByIdController,
    addMagazineController,
    updateMagazineByIdController,
} from "../controllers/magazine.controller.js";

const magazineRouter = Router();

magazineRouter.get("/", getMagazinesController);
magazineRouter.get("/:id", getMagazineByIdController);
magazineRouter.post("/", addMagazineController);
magazineRouter.put("/:id", updateMagazineByIdController);

export default magazineRouter;