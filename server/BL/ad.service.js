import { AdModel } from "@/server/DL/ad.model";

export const getAllAds =  () =>  AdModel.find()
export const getAdById =  (id) =>  AdModel.findById(id)