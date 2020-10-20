const express = require('express')

const routes = express.Router()

const note_controller = require('./controllers/note_controller')
const owner_controller = require('./controllers/owner_controller')

routes.get('/owners/:email', owner_controller.show)
routes.post('/owners', owner_controller.store)
routes.get('/notes/:owner/:send_email', note_controller.index)
routes.post('/notes', note_controller.store)

module.exports = routes