const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  poste: {
    type: String,
    required: true,
  },
  entreprise: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
  },

  description: {
    type: String,
    required: true,
  },
  mission: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    required: true,
  },
  howToApply: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Offer", offerSchema);
