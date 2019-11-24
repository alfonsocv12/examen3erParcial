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

  /*Funcion encargada de regresar
  si es una fecha valida*/
  isValidDate(dateString) {
    var regEx = /^((\d{4})-(\d{2})-\d{2}) (20|21|22|23|[0-1]?\d{1}):([0-5]?\d{1}):([0-5]?\d{1})$/;
    // let regEx = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/;
    console.log(dateString.match(regEx));
    if(!dateString.match(regEx)) return false;  // Invalid format
    console.log('entro');
    var d = new Date(dateString);
    var dNum = d.getTime();
    if(!dNum && dNum !== 0) return false; // NaN value, Invalid date
    return true;
  }

}
