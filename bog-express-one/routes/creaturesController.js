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


module.exports = router;
