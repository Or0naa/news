import { ArticleModel } from "@/server/DL/article.model";
import { createNewArticle } from "@/server/DL/controllers/article.controller";

export const getAllArticles = async () => {
  return await ArticleModel.find();
};

export const getArticleById = async (id) => {
  return await ArticleModel.findById(id);
};


export const createArticleService = async (data) => {
  if (!data.title || !data.content || !data.editor) {
      throw new Error("Please fill all the fields");
  }

  const newArticle = new ArticleModel({
      title: data.title,
      subtitle: data.subtitle,
      content: data.content,
      editor: data.editor,
      quote: data.quote,
      image: data.image,
      tags: data.tags.split(',').map(tag => tag.trim()),
  });

  return await newArticle.save();
};

export async function updateArticle(id, data) {
  return await ArticleModel.findByIdAndUpdate(id, data, { new: true });
}
