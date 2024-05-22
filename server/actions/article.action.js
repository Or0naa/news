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
  const formData = Object.fromEntries(fd);
  const { articleId, author, content } = formData;

  try {
    await connectToMongo();
    const commentData = {
      author,
      content,
    };

    // Convert the articleId string to a valid MongoDB ObjectId
    const objectId = new mongoose.Types.ObjectId(articleId);

    const updatedArticle = await updateCommentService(objectId, commentData);
    revalidatePath(`/articles/${updatedArticle._id}`);
    redirect(`/articles/${updatedArticle._id}`);
  } catch (error) {
    console.error("Error adding comment:", error);
    return { message: 'Error adding comment' };
  }
}