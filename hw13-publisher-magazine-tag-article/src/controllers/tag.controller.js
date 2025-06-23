import * as tagService from "../services/tag.service.js"

import HttpExeption from "../utils/HttpExeption.js";
import validateBody from "../utils/validateBody.js";
import { tagAddSchema, tagUpdateSchema } from "../validation/tag.schema.js";

export const getTagsController = async (req, res) => {
    const result = await tagService.getTag();
    res.json(result)
};

export const getTagByIdController = async (req, res) => {
    const { id } = req.params;
    const result = await tagService.getTagById(id);
    if (!result) throw HttpExeption(404, `Tag with id=${id} not found`);

    res.json(result);
};

export const addTagController = async (req, res) => {
    await validateBody(tagAddSchema, req.body);

    const result = await tagService.addTag(req.body);
    res.status(201).json(result);
};

export const updateTagByIdController = async (req, res) => {
    await validateBody(tagUpdateSchema, req.body);

    const {id} = req.params;
    const result = await tagService.updateTag(id, req.body);
    if(!result) throw HttpExeption(404, `Tag with id=${id} not found`);

    res.json(result);
};