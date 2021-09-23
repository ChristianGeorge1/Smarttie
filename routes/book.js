const express = require('express')
const Book = require('../models/book')
const router  = express.Router()

router.get('/', async(req, res) => { 
  const books = await Book.find()
  res.render('book/index', {books: books})
  res.send(books)
})

router.post('/', async(req, res) => { 
  const book = new Book({
    name: req.body.name, 
    author: req.body.author, 
    category: req.body.category, 
    date: req.body.date, 
    user: req.body.user
  })
  const result = await book.save()
  res.status(201).send(result);
})

router.put('/:id', async(req, res) => { 
  let bookId = req.params.id
  let update = req.body

  Book.findByIdAndUpdate(bookId, update, (err, bookUpdated) => { 
    if(err) res.status(500).send({message: 'Error al actualizar el libro' + err})

    res.status(200).send({book: bookUpdated})
  })

})

router.delete('/:id', async(req, res) => { 
  await Book.findByIdAndDelete(req.params.id)
  res.send('Eliminado')
  resu.status(201)
})

module.exports = router;