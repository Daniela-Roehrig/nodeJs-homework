import Tag from "../db/Tag.js"

export const getTags = () => Tag.find();

export const getTagById = (id) => Tag.findByPk(id);

export const addTag = (payload) => Tag.create(payload);

export const updateTag = async(id, payload)=>  Tag.findByIdAndUpdate(id, payload, { new: true, runValidators: true });