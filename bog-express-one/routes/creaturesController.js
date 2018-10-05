const router = require('express').Router();
const { Creature } = require('../db/models')

/* GET home page. */
router.get('/', async (req, res) => {
  const creatures = await Creature.find({})
    res.send(creatures)
})


module.exports = router;
