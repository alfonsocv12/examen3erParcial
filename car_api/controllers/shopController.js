const Shop = require('../models/shopModel');
const passwordHash = require('password-hash');

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
        console.log(req.body.password);
        req.body.password = passwordHash.generate(req.body.password);
        console.log(req.body.password);
        const shop = new Shop(req.body);
        await shop.save();
        res.status(200).json(shop);
    } catch (error) {
        res.status(400).json(error);

    }
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
