import { AdModel } from "@/server/DL/Admodel";

export const getAllAds =  () =>  AdModel.find()
export const getAdById =  (id) =>  AdModel.findById(id)