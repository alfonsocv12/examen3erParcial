const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const appointmentSchema = new Schema({
    name: { type: String, required: [true, "Necesita nombre"] },
    email: { type: String, required: [true, "Necesita nombre"] },
    car: {type: String, required: [true, "Necesita un carro"]},
    shop: {
      shopID: {type: ObjectId, required: [true, "Necesita mandar un shop"]},
      service: {type: ObjectId, required: [true, "Necesita mandar un servicio"]}
    },
    date: {type: Date, required: [true, "Necesita mandar un dia"]},
    status: {
      type: String,
      enum:['pending','in process','Finish'],
      default:"pending"
    }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
