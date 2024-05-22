
import { FlashModel } from "@/server/DL/flash.model";

export const getFlashes = async  () => await FlashModel.find() 

export const getFlashById =  (id) =>  FlashModel.findById(id)

export const createFlash = (data) => FlashModel.create(data)

export const updateFlash = (id, data) => FlashModel.findByIdAndUpdate(id, data)