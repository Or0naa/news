"use server";

import { revalidatePath } from "next/cache";
import { createNewFlash } from "@/server/BL/flash.service";
import { connectToMongo } from "@/server/DL/connectToMongo";
import { redirect } from "next/navigation";


export const createFlashAction = async (fd) => {
    const flashObject = Object.fromEntries(fd)
    let newFlashFromDb = {}
    try {
       await connectToMongo()
       newFlashFromDb = await createNewFlash(flashObject)
       revalidatePath(`/flash`)
    } catch (error) {
       console.log({ error });
       return { message: 'not created' }
    }
    redirect(`/flash`)
 }
