const express = require('express')
const User = require('../models/user')
const router  = express.Router()

router.get('/', async(req, res) => { 
  const users = await User.find()
  res.render('user/index', { users: users })
  res.send(users)
})

router.post('/', async(req, res) => { 
  const user = new User({
    name: req.body.name, 
    email: req.body.email, 
  })
  const result = await user.save()
  res.status(201).send(result);
})

router.put('/:id', async(req, res) => { 
  let userId = req.params.id
  let update = req.body

  User.findByIdAndUpdate(userId, update, (err, userUpdated) => { 
    if(err) res.status(500).send({message: 'Error al actualizar al usuario' + err})

    res.status(200).send({user: userUpdated})
  })
})

router.delete('/:id', async(req, res) => { 
  await User.findByIdAndDelete(req.params.id)
  res.send('Eliminado')
  resu.status(201)
})

module.exports = router;