const express = require('express')
const Category = require('../models/category')
const router  = express.Router()

router.get('/', async(req, res) => { 
  const categorys = await Category.find()
  res.render('category/index', { categorys: categorys })
  //res.send(categorys)
})

router.post('/', async(req, res) => { 
  const category = new Category({
    name: req.body.name, 
    description: req.body.description, 
  })
  const result = await category.save()
  res.status(201).send(result);
})

router.put('/:id', async(req, res) => { 
  let categoryId = req.params.id
  let update = req.body

  Category.findByIdAndUpdate(categoryId, update, (err, categoryUpdated) => { 
    if(err) res.status(500).send({message: 'Error al actualizar la categoria' + err})

    res.status(200).send({user: categoryUpdated})
  })
})

router.delete('/:id', async(req, res) => { 
  await Category.findByIdAndDelete(req.params.id)
  res.send('Eliminado')
  resu.status(201)
})

module.exports = router;