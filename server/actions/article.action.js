"use server";

import { revalidatePath } from "next/cache";
import { createArticleService, updateCommentService } from "@/server/BL/article.service";
import { connectToMongo } from "@/server/DL/connectToMongo";
import { redirect } from "next/navigation";


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
   const { articleId, commentId, author, content } = formData;
 
   try {
     await connectToMongo();
     const updatedArticle = await updateCommentService(articleId, commentId, { author, content });
     revalidatePath(`/articles/${updatedArticle._id}`);
     redirect(`/articles/${updatedArticle._id}`);
   } catch (error) {
     console.error("Error updating comment:", error);
     return { message: 'Error updating comment' };
   }
 };