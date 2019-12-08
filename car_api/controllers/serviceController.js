const Service = require('../models/serviceModel');
const baseController = new (require("../controllers/baseController")).BaseController();

exports.ServiceController = class ServiceControllerClass {
  /*Funcion constructora*/
  constructor() {
      require('auto-bind')(this);
  }

  /*Funcion para hacer un
  nuevo servicio*/
  async create(req, res){
    try{
      const service = new Service(req.body);
      await service.save()
      res.status(200).json(service);
    }catch(error){
      res.status(400).json(error)
    }
  }

  /*
  Funcion encargada de actualizar un
  servicio*/
  async update(req, res){
    try {
      const service = Service.findById(req.params.service_id);
      if(!service) res.status(400).send({msg:"No existe el servicio"})
      req.body.name ? service.name = req.body.name : service.name
      await service.save()
      res.status(200).send({msg:"Exitoso"})
    } catch (e) {
      res.status(400).send({msg:e.message})
    }
  }

  async getList(req, res){
    res.status(200).send(await Service.find({}))
  }

  /*Funcion encargada de borrar un
  servicio*/
  async delete(req, res){
    try{
      const service = await Service.deleteOne(
          {_id:baseController.getId(req.params.service_id)}
      );
      if(service.deletedCount == 0) throw new Error('No se encontro el valor')
      res.status(200).send(service);
    }catch (error){
      res.status(400).json({message:error.message});
    }
  }
}
