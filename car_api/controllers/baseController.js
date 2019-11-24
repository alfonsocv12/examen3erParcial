const ObjectId = (require('mongoose')).Types.ObjectId

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

  async insert_res(res, json, Model){
    try {
        const model = new Model(json);
        await model.save();
        res.status(200).json(model);
    } catch (error) {
        res.status(400).json(error);

    }
  }

  getId(res, stringId){
    try{
      return ObjectId(stringId)
    }catch{
      res.status(400).send({msg:"Id invalido"})
    }
  }
}
