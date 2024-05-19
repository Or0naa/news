"use server"

import { revalidatePath } from "next/cache";
import { createArticleService } from "../BL/article.service";
import { connectToMongo } from "../DL/connectToMongo"
import { redirect } from "next/navigation";

export const createArticleAction = async (fd) => {
    const { title } = Object.fromEntries(fd)
    try {
       await connectToMongo()
       const newArticle = { ...articleObject, title}
       const newArticleFromDb = await createArticleService(newArticle)
       revalidatePath(`/article/${newArticleFromDb._id}`)
    } catch (error) {
       console.log({ error });
       return { message: 'not created' }
    }
    redirect('/')
 }
