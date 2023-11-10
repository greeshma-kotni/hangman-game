const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
  category: String,
  word: String,
});

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;
