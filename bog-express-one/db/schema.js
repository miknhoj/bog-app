const Schema = require('mongoose').Schema

const CreatureSchema = new Schema ({
    name: String,
    description: String
})

module.exports = {
    CreatureSchema
}