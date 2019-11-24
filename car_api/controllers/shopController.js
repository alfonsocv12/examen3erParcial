const Shop = require('../models/shopModel');
const jwt = require('jsonwebtoken');
const passwordHash = require('password-hash');
const baseController = new (require("../controllers/baseController")).BaseController();
const ObjectId = (require('mongoose')).Types.ObjectId;
require('dotenv').config();

exports.ShopController = class ShopControllerClass {
  /*Funcion constructora*/
  constructor() {
    require('auto-bind')(this);
  }

  /*
  Funcion encargada de regresar
  todas las shops*/
  async getAll(req, res){
    try{
      let query = {}
      req.query.service_id ? query['services'] = ObjectId(req.query.service_id) : null;
      res.status(200).send(await Shop.find(query));
    }catch(error){
      res.status(400).send({msg:error.message});
    }
  }

  /*
  Funcion encargada de crear un
  taller
  */
  async create(req, res){
    try {
        req.body.password = passwordHash.generate(req.body.password);
        req.body.services = this.getOIdArray(res, req.body.services);
        const shop = new Shop(req.body);
        await shop.save();
        res.status(200).json(shop);
    } catch (error) {
        res.status(400).json(error);

    }
  }

  /*
  Funcion encargada de regresar un
  ObjectId por cada parte del array*/
  getOIdArray(res, services){
    for(let [index, service] in services.entries()){
      services[index] = baseController.getId(res, service);
    }
    return services
  }

  /*
  Funcion encargada de logian a un usuario*/
  async login(req, res){
    try{
      const shop = await Shop.findOne({email:req.body.email},{name:1, email:1,password:1})
      this.validateEmail(res, shop)
      this.validatePassword(res, shop.password, req.body.password);
      const token = jwt.sign({email:shop.email,name:shop.name}, process.env.secret_token, {expiresIn: '24h'});
      res.status(200).send({token:token})
    }catch(error){
      res.status(400).send({msg:error.message});
    }
  }

  /*
  Funcion encargada de validar el
  correo*/
  validateEmail(res, shop){
    if(!shop){
      throw new Error("El correo o la contraseña son incorrectos");
    }
  }

  /*Funcion encargada de validar
  la contraseña*/
  validatePassword(res, shopPassword, bodyPassword){
    if(!passwordHash.verify(bodyPassword, shopPassword)){
      throw new Error("El correo o la contraseña son incorrectos");
    }
  }

}
