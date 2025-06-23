import Magazine from "../db/Magazine.js"

export const getMagazines = () => Magazine.find();

export const geteMagazineById = (id) => Magazine.findByPk(id);

export const addMagazine = (payload) => Magazine.create(payload);

export const updateMagazine = async(id, payload)=>Magazine.findByIdAndUpdate(id, payload, { new: true, runValidators: true });