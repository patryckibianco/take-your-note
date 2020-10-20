const Note = require('../models/Note')
module.exports = {
    async getNotesByOwnerId (owner) {
        const notes = await Note.find({ owner: owner })
        return notes
    }
}