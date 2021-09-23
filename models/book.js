const mongoose = require('mongoose'); 

const bookSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true
  }, 

  author: {
    type: String, 
    required: true
  }, 

  category: { 
    type: String, 
    required: true
  }, 

  date: {
    type: String, 
    required: true
  }, 

  user: { 
    type: String, 
    required: true
  }
})

const Book = mongoose.model('book', bookSchema)
module.exports = Book