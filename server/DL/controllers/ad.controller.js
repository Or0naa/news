import { AdModel } from "../ad.model";
import { getAllAds } from "@/server/BL/ad.service";

export const getAds =  () => getAllAds();
export const getAdById =  (id) => AdModel.findById(id)