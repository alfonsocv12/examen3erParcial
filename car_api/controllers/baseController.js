exports.BaseController = class BaseClass {
  /*Funcion constructora*/
  constructor() {
    require('auto-bind')(this);
  }
  /*Funcion encargada de regresar
  que la api esta funcionando*/
  landing(req, res){
    res.send({message:"It Works"});
  }

  validator(req, error, value){
    if(!value){
      req.error = error
      throw new Error();
    }
  }

  async insert_res(res, json, model){
    try {
        const model = new model(json);
        await model.save();
        res.status(200).json(shop);
    } catch (error) {
        res.status(400).json(error);

    }
  }
}
