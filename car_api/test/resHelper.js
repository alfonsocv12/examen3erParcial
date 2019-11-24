exports.ResTest = class resJson{
  constructor(){
    require('auto-bind')(this);
    this.statusCode = null;
    this.sendCode = null;
  }

  status(code){
    this.statusCode = code
  }

  send(msg){
    this.sendCode = msg
  }
}
