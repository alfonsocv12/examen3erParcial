const Shop = require('../models/shopModel');
const passwordHash = require('password-hash');
const baseController = new (require("../controllers/baseController")).BaseController();

exports.ShopController = class ShopControllerClass {
  /*Funcion constructora*/
  constructor() {
    require('auto-bind')(this);
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
    const shop = await Shop.findOne({email:req.body.email})
    this.validateEmail(res, shop)
    this.validatePassword(res, shop.password, req.body.password);
    res.status(200).send({msg:"token"})
  }

  /*
  Funcion encargada de validar el
  correo*/
  validateEmail(res, shop){
    if(!shop){
      res.status(400).send({msg:"No esta registrado"})
    }
  }

  /*Funcion encargada de validar
  la contraseña*/
  validatePassword(res, shopPassword, bodyPassword){
    if(!passwordHash.verify(bodyPassword, shopPassword)){
      res.status(400).send({msg:"El correo o la contraseña son incorrectos"})
    }
  }

}
