const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const appointmentSchema = new Schema({
    name: { type: String, required: [true, "Necesita nombre"] },
    email: { type: String, required: [true, "Necesita nombre"] },
    car: {
      vin: {type:String, required: [true, "Necesita un carro"]},
      model: {type: String, required: [true, "Necesita un carro"]}
    },
    service: {
      id:{type: ObjectId, required: [true, "Necesita mandar un servicio"]},
      shopId:{type: ObjectId, required: [true, "Necesita mandar una shop"]}
    },
    date: {type: String, required: [true, "Necesita mandar un dia"]},
    status: {
      type: String,
      enum:['pending','in process','Finish'],
      default:"pending"
    }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
