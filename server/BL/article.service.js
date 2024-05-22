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



export const updateCommentService = async (articleId, commentId, commentData) => {
  if (!articleId || !commentId || !commentData.author || !commentData.content) {
    throw new Error("Missing required fields");
  }

  const article = await ArticleModel.findById(articleId);
  if (!article) {
    throw new Error("Article not found");
  }

  comment.author = commentData.author;
  comment.content = commentData.content;
  comment.date = new Date();

  await article.save();
  return article;
};
