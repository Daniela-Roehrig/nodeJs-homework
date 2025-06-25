import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
        type: Schema.Types.ObjectId,
        ref: "Category", 
        required: true,
    },
}, { versionKey: false, timestamps: true });

const Product = model("Product", productSchema);
export default Product;
