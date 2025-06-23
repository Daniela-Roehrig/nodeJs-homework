import { Schema, model } from "mongoose";

const magazineSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 2,
    },
    issueNumber: {
        type: String,
        required: true,
        minlength: 10,
    },
    publisher: {
        type: Schema.Types.ObjectId,
        ref: "publishers", 
        required: true,
    },
}, { versionKey: false, timestamps: true });

const Magazine = model("magazines", magazineSchema);
export default Magazine;
