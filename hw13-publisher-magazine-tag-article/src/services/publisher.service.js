import Publisher from "../db/Publisher.js"

export const getPublishers = () => Publisher.find();

export const getePublisherById = (id) => Publisher.findByPk(id);

export const addPublisher = (payload) => Publisher.create(payload);

export const updatePublisher = async(id, payload)=> Publisher.findByIdAndUpdate(id, payload, { new: true, runValidators: true });