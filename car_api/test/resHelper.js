import http from 'http';

let ResTest = Object.create(http.ServerResponse.prototype);

module.exports = ResTest;

ResTest.status = function status(code) {
  this.statusCode = code;
  return this;
};

ResTest.json = function json(obj) {
  var val = obj;

  // // settings
  // var app = this.app;
  // var escape = app.get('json escape')
  // var replacer = app.get('json replacer');
  // var spaces = app.get('json spaces');
  // var body = stringify(val, replacer, spaces, escape)
  //
  // // content-type
  // if (!this.get('Content-Type')) {
  //   this.set('Content-Type', 'application/json');
  // }

  return this.send(obj);
};

ResTest.send = function send(body) {
  this.sendBody = body
  return this
};
