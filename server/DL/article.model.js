const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  content: {
    type: [String], // or [String] if content is an array
    required: true,
  },
  editor: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  quote: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  comments: [
    {
      author: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  isActive: {
    type: Boolean,
    default: false,
  },
});

// ArticleSchema.index({
//   title: 'text',
//   subtitle: 'text',
//   content: 'text',
//   editor: 'text',
//   quote: 'text',
//   tags: 'text',
// })

export const ArticleModel = mongoose.models?.Article || mongoose.model('Article', ArticleSchema);

