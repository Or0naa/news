import { ArticleModel } from "@/server/DL/article.model";
export const getAllArticles = async () => {
  return await ArticleModel.find();
};
export const getArticles = async (filter = {}) => {
  console.log({filter})
  const results = await ArticleModel.find(filter);
  console.log({results});
  return results;
}
export const getNotYetPublishedArticles = async () => {
  return await ArticleModel.find({ isActive: false });
};
export const getArticleById = async (id) => {
  return await ArticleModel.findById({_id:id});
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
export const updateCommentService = async (articleId, commentData) => {
const article = await getArticleById(articleId)
  if (!article) {
    throw new Error("Article not found");
  }
if (!commentData.author || !commentData.content) {
    throw new Error("Missing required fields");
  }
console.log("id:", articleId);
// console.log("id2:", article)
let newComment = {
  author: commentData.author,
    content: commentData.content,
    date: new Date(),
  };
  article.comments = [...article.comments, newComment]
  await article.save();
  return article;
};
export const updateArticle = async (id, data) => {
  const article = await ArticleModel.findById(id)
  if (!article) {
    throw new Error("Article not found")
  }
  article.title = data.title
  article.subtitle = data.subtitle
  article.content = data.content
  article.editor = data.editor
  article.quote = data.quote
  article.image = data.image
  article.tags = data.tags.split(', ').map(tag => tag.trim())
  await article.save()
  return article
  }