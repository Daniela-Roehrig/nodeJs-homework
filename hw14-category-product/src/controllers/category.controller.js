import * as categoryService from "../services/category.service.js"


import validateBody from "../utils/validateBody.js";
import { categoryAddSchema} from "../validation/category.schema.js";


export const addCategoryController = async (req, res) => {
    await validateBody(categoryAddSchema, req.body);

    const result = await categoryService.addCategory(req.body);
    res.status(201).json(result);
};
