const { Schema, model } = require('mongoose')

const OwnerSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
},
{
    timestamps: true    
}
)

module.exports = model('Owner', OwnerSchema)