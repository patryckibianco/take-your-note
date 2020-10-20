const { Schema, model } = require('mongoose')

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Owner',
        require: true
    },
},
{
    timestamps: true    
}
)

module.exports = model('Note', NoteSchema)