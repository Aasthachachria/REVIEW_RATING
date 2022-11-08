const joi = require("@hapi/joi")
const schema = {
    registerUser : joi.object({
        name: joi.string().max(20).required(),
        email : joi.string().email().required(),
        password: joi.string().min(6).required(),
        number : joi.number().integer().min(100000000).max(999999999).message("Invalid number").required(),
        city: joi.string().required(),
        state : joi.string().required()
    }).unknown(true),
}

module.exports =schema