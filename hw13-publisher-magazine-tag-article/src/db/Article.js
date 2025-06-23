/* import { Schema, model } from "mongoose";

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 2,
    },
    content: {
        type: String,
        required: true,    
        minlength: 20,     
        trim: true,        
    }
}, { versionKey: false, timestamps: true });

const Article = model("articles", articleSchema);
export default Article;
 */

import { Schema, model } from "mongoose";

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
  },
  content: {
    type: String,
    required: true,
    minlength: 10,
    trim: true,
  },
  tags: [{
    type: Schema.Types.ObjectId,
    ref: "tags",    
  }],
}, { versionKey: false, timestamps: true });

const Article = model("articles", articleSchema);
export default Article;
