"use server";

import { revalidatePath } from "next/cache";
import { createArticleService } from "@/server/BL/article.service";
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