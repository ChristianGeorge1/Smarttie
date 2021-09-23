/*EXPRESS config*/
const mongoose = require('mongoose')
const express = require('express'); 

const app = express(); 

const book = require('./routes/book')
const user = require('./routes/user')
const category = require('./routes/category')

app.use(express.json());
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))


app.use('/api/book', book)
app.use('/api/user', user)
app.use('/api/category', category)

 const port = 3000

app.listen(port, () => console.log('Puerto: ' + port))

mongoose.connect('mongodb://localhost/library-crud')
  .then(() => console.log('Conectado a mongo'))
  .catch(erro => console.log(erro))
