import { ArticleModel } from "@/server/DL/article.model";

export const getAllArticles =  () =>  ArticleModel.find()
export const getArticleById =  (id) =>  ArticleModel.findById(id)