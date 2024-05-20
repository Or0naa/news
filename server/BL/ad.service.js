import { AdModel } from "@/server/DL/ad.model";

export const getAllAds =  () =>  AdModel.find()
export const getAdById =  (id) =>  AdModel.findById(id)
export const getRandomAd = async () => {
    try {
      const randomAd = await AdModel.aggregate([{ $sample: { size: 1 } }]);
      return randomAd[0]; // או אולי יש צורך להחזיר את הפרסומת כפרומיס
    } catch (error) {
      console.error("Error fetching random ad:", error);
      throw error;
    }
  }