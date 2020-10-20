const Owner = require('../models/Owner')

module.exports = {

    async store(req, res) {
        
        const { email } = req.body

        const userExist = await Owner.findOne({ email: email })

        if(userExist) {
            return res.status(200).json(userExist)
        }

        const owner = await Owner.create({
            email
        })

        return res.status(201).json(owner)
    },

    async show(req, res) {

        const { email } = req.params

        const userExist = await Owner.findOne({ email: email })

        if(userExist) {
            return res.status(200).json(userExist)
        }

        return res.status(404).json({ message: "Owner not found, verify your username"})
    }
}