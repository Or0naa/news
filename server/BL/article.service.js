import { ArticleModel } from "@/server/DL/article.model";
import { createNewArticle } from "@/server/DL/controllers/article.controller";

export const getAllArticles = async () => {
  return await ArticleModel.find();
};

export const getArticleById = async (id) => {
  return await ArticleModel.findById(id);
};

export const createArticle = async (article) => {
  if (!article.title || !article.content || !article.editor) {
    throw new Error("Please fill all the fields");
  }
  return await createNewArticle(article);
};