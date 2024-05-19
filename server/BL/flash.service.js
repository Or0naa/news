import { FlashModel } from "@/server/DL/flash.model";

export const getAllFlashes =  () =>  FlashModel.find()
export const getFlashById =  (id) =>  FlashModel.findById(id)

