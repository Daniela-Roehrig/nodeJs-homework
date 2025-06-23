import * as magazineService from "../services/magazine.service.js"

import HttpExeption from "../utils/HttpExeption.js";
import validateBody from "../utils/validateBody.js";
import { magazineAddSchema, magazineUpdateSchema } from "../validation/magazine.schema.js";

export const getMagazinesController = async (req, res) => {
    const result = await magazineService.getMagazine();
    res.json(result)
};

export const getMagazineByIdController = async (req, res) => {
    const { id } = req.params;
    const result = await magazineService.getMagazineById(id);
    if (!result) throw HttpExeption(404, `Magazine with id=${id} not found`);

    res.json(result);
};

export const addMagazineController = async (req, res) => {
    await validateBody(magazineAddSchema, req.body);

    const result = await magazineService.addMagazine(req.body);
    res.status(201).json(result);
};

export const updateMagazineByIdController = async (req, res) => {
    await validateBody(magazineUpdateSchema, req.body);

    const {id} = req.params;
    const result = await magazineService.updateMagazine(id, req.body);
    if(!result) throw HttpExeption(404, `Magazine with id=${id} not found`);

    res.json(result);
};