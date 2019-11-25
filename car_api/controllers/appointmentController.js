const Appointment = require("../models/appointmentModel");
const Service = require("../models/serviceModel");
const baseController = new (require("../controllers/baseController")).BaseController();
const ObjectId = (require('mongoose')).Types.ObjectId

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
      const appointement = new Appointment(this.validateInput(res, req.body));
      await appointement.save();
      res.status(200).json(appointement);
    }catch(error){
      res.status(400).json(error);
    }
  }

  /*
  Funcion encargada de validar
  la nueva entrada*/
  validateInput(res, input_json){
    input_json.service = baseController.getId(input_json.service);
    input_json.shop = baseController.getId(input_json.shop);
    if(!baseController.isValidDate(input_json.date)){
      res.status(400).send({msg:"Manda fecha adecuada"});
    }
    return input_json
  }

  /*Funcion encargada de
  actualizar un appointement*/
  async update(req, res){
    try{
      console.log(req.params.appointment_id);
      let appointment = await Appointment.findById(req.params.appointment_id);
      if(!appointment) res.status(400).send({msg:"No existe el appointment"})
      console.log(req.body.status);
      req.body.status ? appointment.status = req.body.status : null;
      await appointment.save()
      res.status(200).json(appointment);
    }catch(error){
      res.status(400).json(error);
    }
  }

  /*Funcion encargada de
  borrar un appointement*/
  delete(){

  }

  /*
  Funcion encargada de regresar
  el enum de estados*/
  appointmentStatusTypes(req, res){
    res.status(200).send(Appointment.schema.obj.status.enum)
  }

  /*
  Funcion encargada de regresar
  todas las citas de una shop*/
  async getAllShopId(req, res){
    let appointments = JSON.parse(JSON.stringify(await Appointment.find({shop:ObjectId(req.params.shop_id),status:{$ne:"Finish"}})));
    appointments = await this.getServices(appointments);
    res.status(200).send(appointments);
  }

  /**/
  async getServices(appointments){
    for(let index in Object.entries(appointments)){
        appointments[index].service = (await Service.findById(ObjectId(appointments[index].service))).name;
    }
    return appointments
  }
}
