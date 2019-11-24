const Appointment = require("../models/appointmentModel");
const baseController = new (require("../controllers/baseController")).BaseController();

exports.AppointmentController = class AppointmentControllerClass {
  /*Funcion constructora*/
  constructor() {
    require('auto-bind')(this);
  }

  /*
  Funcion encargada de crear
  un appointement*/
  async create(req, res){
    try{
      const appointement = new Appointment(req.body);
      await appointement.save()
      res.status(200).json(appointement);
    }catch(error){
      res.status(400).json(error);
    }
  }

  /*
  Funcion encargada de regresar
  el enum de estados*/
  appointementStatusTypes(req, res){
    res.status(200).send(Appointement.schema.obj.status.enum)
  }
}
