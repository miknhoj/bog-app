const router = require('express').Router();
const { Creature } = require('../db/models')

// SHOW ALL
router.get('/', async (req, res) => {
  const creatures = await Creature.find({})
    res.send(creatures)
})

// SHOW ONE
router.get('/:id', async (req, res) => {
  const creature = await Creature.findById(req.params.id)
  res.send(creature)
})

// CREATE
router.post('/', async (req, res) => {
  const creature = await Creature.create(req.body)
  res.send(creature)
})

// UPDATE
router.put('/:id', async (req, res) => {
  const creature = await Creature.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.send(creature)
})

// DELETE
router.delete('/:id', async (req, res) => {
  await Creature.findByIdAndRemove(req.params.id)
  res.sendStatus(200)
})


module.exports = router;
