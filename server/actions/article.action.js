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


 export const updateCommentAction = async (fd, articleId) => {
  const commentData = Object.fromEntries(fd);

let updatedArticle = {}

  try {
    await connectToMongo();
   updatedArticle = await updateCommentService(articleId, commentData);
    revalidatePath(`/articles/${updatedArticle._id}`);
  
  } catch (error) {
    console.error("Error adding comment:", error);
    return { message: 'Error adding comment' };
  }  
  redirect(`/articles/${updatedArticle._id}`);
}