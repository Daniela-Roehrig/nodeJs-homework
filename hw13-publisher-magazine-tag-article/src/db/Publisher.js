import { Schema, model } from "mongoose"

const publisherSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 2,
    },
    location: {
        type: String,
        required: true,
        minlength: 10,
    },
   
}, { versionKey: false, timestamps: true });

const Publisher = model("publishers", publisherSchema);

export default Publisher