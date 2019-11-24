const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    name: { type: String, required: [true, "Necesita nombre string"], unique:true}
});

module.exports = mongoose.model('Service', serviceSchema);
