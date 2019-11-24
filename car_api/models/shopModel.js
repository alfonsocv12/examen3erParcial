const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

const shopSchema = new Schema({
    name: { type: String, required: [true, "Necesita nombre"] },
    email: { type: String, required: [true, "Necesita correo"], unique:true},
    password:{ type:String, required: [true, "Necesitas mandar una contraseña"]},
    services: [{type:ObjectId, ref:'service'}]
})

module.exports = mongoose.model('Shop', shopSchema)
