require('dotenv').config() 
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})

const { Creature } = require('./models')

const luke = new Creature ({
    name: 'Luke',
    description: 'Jedi'
})

const darth = new Creature ({
    name: 'Darth Vader',
    description: 'Father of Luke'
})

Creature.deleteMany()
    .then (() => {
        return Creature.insertMany([luke, darth])
    })
    .then (() => {
        console.log('Seeds Loaded')
        mongoose.connection.close()
    })