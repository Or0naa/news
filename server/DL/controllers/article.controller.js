
import { ArticleModel } from "../article.model";
import { getAllArticles, createArticleService, updateArticle } from "@/server/BL/article.service";

export const getArticles =  () => getAllArticles();
export const getArticleById =  (id) =>  ArticleModel.findById(id)
export const createNewArticle =  (article) =>  createArticleService(article)
export const updateArticleById =  (id, article) =>  updateArticle(id, article)