const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

const shopSchema = new Schema({
    name: { type: String, required: [true, "Necesita nombre"] },
    email: { type: String, required: [true, "Necesita correo"], unique:true},
    password: {
      type:String, required: [true, "Necesitas mandar una contraseña"]
    },
    schedule: {
      initial: {
          type: String,
          required:[true, "You need to send when your workshop starts working"]
      },
      final: {
        type: String,
        required:[true, "You need to send when your workshop Stops working"]
      }
    },
    services: [{
      serviceId:{type:ObjectId, ref:'service'},
      name:String,
      price:Number,
      descripcion:{type:String}
    }],
    ubicacion:Array
})

module.exports = mongoose.model('Shop', shopSchema)
