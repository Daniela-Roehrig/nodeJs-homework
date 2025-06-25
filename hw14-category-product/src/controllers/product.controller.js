import * as productService from "../services/product.service.js"
import Product from "../db/Product.js";
import validateBody from "../utils/validateBody.js";
import { productAddSchema } from "../validation/product.schema.js";


export const addProductController = async (req, res) => {
    await validateBody(productAddSchema, req.body);

    const result = await productService.addProduct(req.body);
    res.status(201).json(result);
};

export const getProductsController = async (req, res, next) => {
  try {
    const products = await Product.find().populate('category');  
    res.json(products);
  } catch (error) {
    next(error);
  }
};