import { FlashModel } from "@/server/DL/flash.model";

export const getAllFlashes = async  () => await FlashModel.find() 

export const getFlashById =  (id) =>  FlashModel.findById(id)

