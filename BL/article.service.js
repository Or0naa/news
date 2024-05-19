import { ArticleModel } from "@/DL/article.model";

export const getAllArticles =  () =>  ArticleModel.find()
export const getArticleById =  (id) =>  ArticleModel.findById(id)

const a = getAllArticles("6649b04390a824f1db5c2e11")
console.log("a", a)