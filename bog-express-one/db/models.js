const mongoose = require ('mongoose')
const { CreatureSchema } = require('./schema')

const CreatureModel = mongoose.model('Creature', CreatureSchema)

module.exports = { Creature: CreatureModel}