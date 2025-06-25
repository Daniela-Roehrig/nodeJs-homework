import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
}, { versionKey: false, timestamps: true });

const Category = model("Category", categorySchema);
export default Category;
