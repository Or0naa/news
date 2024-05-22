
import { getFlashes, getFlashById, createFlash, updateFlash } from "@/server/DL/controllers/flash.controller";

export const getAllFlashes = async  () => await getFlashes()

export const getOneFlash =  (id) =>  getFlashById({_id:id})

export const createNewFlash = (data) => createFlash(data)

export const updateOneFlash = (id, data) => updateFlash({_id:id}, data)

