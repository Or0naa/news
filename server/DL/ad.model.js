const mongoose = require('mongoose');

const AdSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    content: {
      type: [String],
      required: true
    },
    image: {
      type: String,
      required: true
    },
    link : {
        type: String,
        required: true
    }
  });
  
  export const AdModel = mongoose.models.Ad || mongoose.model('Ad', AdSchema);