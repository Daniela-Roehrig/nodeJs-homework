import {Schema, model} from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        unique: true,
    },
    price: {
        type: Number,  
        required: true,
        min: 0,         
    },
    description: {
        type: String,
        required: true,
        minlength: 100,
    },
}, {versionKey: false, timestamps: true});

const Product = model("product", productSchema);

export default Product;