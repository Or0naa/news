import { ArticleModel } from "@/DL/article.model";

export const getAllArticles =  () =>  ArticleModel.find()
export const getArticleById =  (id) =>  ArticleModel.findById(id)

