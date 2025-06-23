import * as publisherService from "../services/publisher.service.js"

import HttpExeption from "../utils/HttpExeption.js";
import validateBody from "../utils/validateBody.js";
import { publisherAddSchema, publisherUpdateSchema } from "../validation/publisher.schema.js";

export const getPublishersController = async (req, res) => {
    const result = await publisherService.getPublishers();
    res.json(result)
};
 
export const getPublisherByIdController = async (req, res) => {
    const { id } = req.params;
    const result = await publisherService.getPublisherById(id);
    if (!result) throw HttpExeption(404, `Publisher with id=${id} not found`);

    res.json(result);
};

export const addPublisherController = async (req, res) => {
    await validateBody(publisherAddSchema, req.body);

    const result = await publisherService.addPublisher(req.body);
    res.status(201).json(result);
};

export const updatePublisherByIdController = async (req, res) => {
    await validateBody(publisherUpdateSchema, req.body);

    const {id} = req.params;
    const result = await publisherService.updatePublisher(id, req.body);
    if(!result) throw HttpExeption(404, `Publisher with id=${id} not found`);

    res.json(result);
};