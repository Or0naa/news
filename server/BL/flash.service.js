import { FlashModel } from "@/server/DL/flash.model";

export const getAllFlashes = async  () => {
    const flashes = await FlashModel.find()
    return flashes
}
export const getFlashById =  (id) =>  FlashModel.findById(id)

