const Service = require('../models/serviceModel');
const baseController = new (require("../controllers/baseController")).BaseController();

exports.ServiceController = class ServiceControllerClass {
  /*Funcion constructora*/
  constructor() {
      require('auto-bind')(this);
      require('auto-bind')(baseController);
  }

  /*Funcion para hacer un
  nuevo servicio*/
  async create(req, res){
    this.insert_res(res, req.body, Service)
  }

  getList(req, res){

  }

  getOne(req, res){

  }

  delete(req, res){
    
  }
}
