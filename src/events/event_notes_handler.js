const amqp = require('amqplib/callback_api')
const owner = require('../owner/owner')

const CONN_URL = 'amqp://RABBITMQ_HOST:5672'
const QUEUE = 'notes'

let ch = null

amqp.connect(CONN_URL, function (err, conn) {
    console.log(conn)
    conn.createChannel(function (err, channel) {
       ch = channel
       ch.assertQueue(QUEUE, { durable: false })
    })  
 })

 process.on('exit', (code) => {
    ch.close()
    console.log(`Closing rabbitmq channel`)
 })

module.exports = {
    async publishToQueue (data)  {
        ch.sendToQueue(QUEUE, new Buffer.from(JSON.stringify(data)))
    },

    async enqueueSendEmail(notes) {
        const ownerNotes = await owner.getOwnerById(notes[0].owner)
        const notesMessage = {
            owner: ownerNotes.email,
            notes: notes
        }
        this.publishToQueue(notesMessage)
    }
}