
import { ArticleModel } from "../article.model";
import { getAllArticles, createArticleServer, updateArticle, getArticles } from "@/server/BL/article.service";

// export const getArticles =  (filter={}) => getAllArticles();
export const searchArticles = async (query) => await getArticles({ $text: { $search: query } });
export const getArticleById =  (id) =>  ArticleModel.findById(id)
export const createNewArticle =  (article) =>  createArticleServer(article)
export const updateArticleById =  (id, article) =>  updateArticle(id, article)