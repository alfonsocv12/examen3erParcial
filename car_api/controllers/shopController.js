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
      req.query.service_id ? query["services.serviceId"] = ObjectId(req.query.service_id) : null;
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
        req.body.services.serviceId = this.getOIdArray(
            res, req.body.services
        );
        const shop = new Shop(req.body);
        await shop.save();
        res.status(200).json(shop);
    } catch (error) {
        res.status(400).json({message:error.message});

    }
  }

  /*Funcion encargada de
  actualizar la tienda*/
  async updateShop(res, req){
    try {
      let shop = await Shop.findById(req.params.shop_id);
      if(!shop) res.status(400).send({msg:"No exite la shop"})
      shop = this.setData(req.body, shop);
      await shop.save()
      res.status(200).send({msg:"Exitoso"})
    } catch (error) {
      res.status(400).send({msg:error.message})
    }
  }

  /*
  Funcion encargada de actualizar la tienda*/
  setData(reqJson, shop){
    reqJson.name ? shop.name = reqJson.name : shop.name;
    reqJson.services ? shop.services = shop.services.push(reqJson.services) : shop.services;
    return shop
  }

  /*
  Funcion encargada de regresar un
  ObjectId por cada parte del array*/
  getOIdArray(res, services){
    for(let [index, service] in services.entries()){
      services[index].serviceId = baseController.getId(
        res, service.serviceId
      );
    }
    return services
  }

  /*
  Funcion encargada para borrar una
  tienda*/
  async deleteShop(req, res){
    try{
      const shop = await Shop.deleteOne(
        {_id:baseController.getId(req.params.shop_id)}
      );
      if(shop.deletedCount == 0) throw new Error('No se encontro el valor')
      res.status(200).send({msg:"Exitoso"});
    }catch(error){
      res.status(400).send({msg:error.message})
    }
  }

  /*
  Funcion encargada de logian a un usuario*/
  async login(req, res){
    try{
      const shop = await Shop.findOne({email:req.body.email},{name:1, email:1,password:1})
      this.validateEmail(res, shop)
      this.validatePassword(res, shop.password, req.body.password);
      const token = jwt.sign({email:shop.email,name:shop.name,_id:shop._id}, process.env.secret_token, {expiresIn: '24h'});
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
