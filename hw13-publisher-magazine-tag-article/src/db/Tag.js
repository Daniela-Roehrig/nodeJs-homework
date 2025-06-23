import { Schema, model } from "mongoose";

const tagSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
  },
  articles: [{
    type: Schema.Types.ObjectId,
    ref: "articles", 
  }],
}, { versionKey: false, timestamps: true });

const Tag = model("tags", tagSchema);
export default Tag;
