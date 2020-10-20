const Owner = require('../models/Owner')
module.exports = {
    async getOwnerById (id) {
        const owner = Owner.findOne({ _id: id })
        return owner
    }
}