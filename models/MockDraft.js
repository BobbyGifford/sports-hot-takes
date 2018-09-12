const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creates Schema
const MockDraftSchema = new Schema({
  version: {
    type: Number,
    required: true,
  },
  sport: {
    type: String,
    required: true,
  },
  picks: [
    {
      proteam: {
        type: String,
        required: true,
      },
      collegeteam: {
        type: String,
        required: true,
      },
      player: {
        type: String,
        required: true,
      },
      position: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
    },
  ],
});

module.exports = MockDraft = mongoose.model('mockdrafts', MockDraftSchema);
