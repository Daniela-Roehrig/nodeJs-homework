import * as articleService from "../services/article.service.js"

import HttpExeption from "../utils/HttpExeption.js";
import validateBody from "../utils/validateBody.js";
import { articleAddSchema, articleUpdateSchema } from "../validation/article.schema.js";

export const getArticlesController = async (req, res) => {
    const result = await articleService.getArticles();
    res.json(result)
};

export const getArticleByIdController = async (req, res) => {
    const { id } = req.params;
    const result = await articleService.getArticleById(id);
    if (!result) throw HttpExeption(404, `Article with id=${id} not found`);

    res.json(result);
};

export const addArticleController = async (req, res) => {
    await validateBody(articleAddSchema, req.body);

    const result = await articleService.addArticle(req.body);
    res.status(201).json(result);
};

export const updateArticleByIdController = async (req, res) => {
    await validateBody(articleUpdateSchema, req.body);

    const {id} = req.params;
    const result = await articleService.updateArticle(id, req.body);
    if(!result) throw HttpExeption(404, `Article with id=${id} not found`);

    res.json(result);
};