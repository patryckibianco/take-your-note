const note = require('../note/note')
const event_notes_handler = require('../events/event_notes_handler')

module.exports = {
    async store(req, res) {

        const { title, description, owner } = req.body

        const note = await Note.create({
            title,
            description,
            owner,
        })

        return res.status(201).json(note)
    },

    async index(req, res) {

        const { owner, send_email } = req.params
        
        const notes = await note.getNotesByOwnerId(owner)
        
        console.log(send_email)

        if(notes && send_email) {
            event_notes_handler.enqueueSendEmail(notes)
        }

        if(notes) {
            return res.status(200).json(notes)
        }

        return res.status(404).json({ message: "You don't have any note to display!"})
    }
}