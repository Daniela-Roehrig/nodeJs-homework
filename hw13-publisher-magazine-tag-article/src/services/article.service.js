import Article from "../db/Article.js"

export const getArticles = () => Article.find();

export const getArticleById = (id) => Article.findByPk(id);

export const addArticle = (payload) => Article.create(payload);

export const updateArticle = async(id, payload)=>Article.findByIdAndUpdate(id, payload, { new: true, runValidators: true });