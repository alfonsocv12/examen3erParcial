const Service = require('../models/serviceModel');
const baseController = new (require("../controllers/baseController")).BaseController();
const ObjectId = (require('mongoose')).Schema.Types.ObjectId

exports.ServiceController = class ServiceControllerClass {
  /*Funcion constructora*/
  constructor() {
      require('auto-bind')(this);
  }

  /*Funcion para hacer un
  nuevo servicio*/
  async create(req, res){
    baseController.insert_res(res, req.body, Service);
  }

  async getList(req, res){
    res.status(200).send(await Service.find({}))
  }

  async delete(req, res){
    const id = baseController.getId(res, req.params.service_id)
    try{
      const service = await Service.deleteOne({_id:id});
      res.status(200).send(service);
    }catch (error){
      res.status(400).json(error);
    }
  }
}
