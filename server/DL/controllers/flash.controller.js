import { FlashModel } from "../flash.model";
import { getAllFlashes, createFlash } from "@/server/BL/flash.service";

export const getFlashes =  () => getAllFlashes();
export const getFlashById =  (id) =>  FlashModel.findById(id)
export const createFlashService =  (flash) =>  createFlash(flash)