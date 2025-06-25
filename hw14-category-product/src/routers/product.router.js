import { Router } from "express";

import { 
    addProductController, 
    getProductsController,
} from "../controllers/product.controller.js";

const productRouter = Router();


productRouter.post("/", addProductController);
productRouter.get("/", getProductsController); 


export default productRouter;