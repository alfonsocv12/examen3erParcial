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
        req.body.password = passwordHash.generate(req.body.password);
        const shop = new Shop(req.body);
        await shop.save();
        res.status(200).json(shop);
    } catch (error) {
        res.status(400).json(error);

    }
  }
}
