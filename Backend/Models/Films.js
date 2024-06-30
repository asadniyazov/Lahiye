const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  name: { type: String, required: true },
  year: { type: Number, required: true },
  category: { type: String, required: true },
  imgUrl: String,
  videoUrl: String,
  description: String
});

const Film = mongoose.model('Film', filmSchema);

module.exports = Film;