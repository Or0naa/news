
"use server";
import { revalidatePath } from "next/cache";
import { createArticleService, updateCommentService } from "@/server/BL/article.service";
import { connectToMongo } from "@/server/DL/connectToMongo";
import { redirect } from "next/navigation";
import mongoose from "mongoose";


export const createArticleAction = async (fd) => {
  const articleObject = Object.fromEntries(fd)
  let newArticleFromDb = {}
  try {
    await connectToMongo()
    newArticleFromDb = await createArticleService(articleObject)
    revalidatePath(`/articles/${newArticleFromDb._id}`)
  } catch (error) {
    console.log({ error });
    return { message: 'not created' }
  }
  redirect(`/articles/${newArticleFromDb._id}`)
}
export const updateCommentAction = async (fd) => {
  // articleId  = new mongoose.Types.ObjectId(articleId)


  let updatedArticle = {}

  try {
    const commentData = Object.fromEntries(fd);
    console.log(commentData);
    await connectToMongo();
    updatedArticle = await updateCommentService(commentData.pid, commentData);
    revalidatePath(`/articles/${updatedArticle._id}`);

  }
  catch (error) {
    console.error("Error adding comment:", error.message);
    return { message: 'Error adding comment' };
  }
  redirect(`/articles/${updatedArticle._id}`);
}


export const updateArticleStatus = async (data) => {
  const { id, action } = Object.fromEntries(data);
  await connectToMongo();

  try {
    if (action === "approve") {
      await ArticleModel.findByIdAndUpdate(id, { isActive: true });
    } else if (action === "delete") {
      await ArticleModel.findByIdAndDelete(id);
    }
    revalidatePath(`/admin`); // Revalidate the admin page after update
  } catch (error) {
    console.error("Error updating article status:", error.message);
    return { error: `Failed to ${action} article` };
  }

  return { message: `Article ${action}d successfully` };
};

export const handleStatusUpdate = async (formData) => {
  const result = await updateArticleStatus(formData);
  return result;
};