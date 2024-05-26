
import { ArticleModel } from "../article.model";
<<<<<<< HEAD
import { getAllArticles, createArticleServer, updateArticle, getArticles } from "@/server/BL/article.service";
=======
import { getAllArticles, createArticleService, updateArticle } from "@/server/BL/article.service";
>>>>>>> d8003fa73996174e74a8554b367feebcf0d5b548

// export const getArticles =  (filter={}) => getAllArticles();
export const searchArticles = async (query) => await getArticles({ $text: { $search: query } });
export const getArticleById =  (id) =>  ArticleModel.findById(id)
export const createNewArticle =  (article) =>  createArticleService(article)
export const updateArticleById =  (id, article) =>  updateArticle(id, article)