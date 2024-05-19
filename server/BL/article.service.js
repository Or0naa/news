import { ArticleModel } from "@/server/DL/article.model";

export const getAllArticles = async () =>  {

    const articles = await ArticleModel.find()

    return articles
}
export const getArticleById =  (id) =>  ArticleModel.findById(id)

