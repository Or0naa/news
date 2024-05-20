const mongoose = require('mongoose');

const FlashSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  content: {
    type: [String],
    required: true
  },
  editor: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: false
  }
});

export const FlashModel = mongoose.models?.Flash || mongoose.model('Flash', FlashSchema);
