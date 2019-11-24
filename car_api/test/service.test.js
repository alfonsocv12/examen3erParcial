import 'mocha';
import { expect, assert } from 'chai';
import "chai/register-should";
import Service from '../models/serviceModel';
import initTest from './testHelper';
import ResTest from './resHelper';
import mongoose from 'mongoose';
import { ServiceController } from '../controllers/serviceController';

initTest();
const serviceControllerInit = new ServiceController();

describe('service',()=>{
  let req, req2;
  before(()=>{
    req2 = {
      params:{
        service_id:"5dda184cf6ee050b14e8046a"
      }
    }
  })
  beforeEach(()=>{
    req = {
      body:{
        name: "prueba 1"
      },
      params:{
        service_id:"5dda184cf6ee050b14e8046a"
      }
    }
  });
  describe('get list', ()=>{
    it('Should return array of services',async ()=>{
      await serviceControllerInit.getList(req, ResTest);
      expect(typeof ResTest.sendBody).to.be.equal('object');
    });
  });

  describe('create', ()=>{
    it('Should say that you send no name', async ()=>{
      req.body.name = null
      await serviceControllerInit.create(req, ResTest);
      expect(ResTest.sendBody.message).to.be.equal("Service validation failed: name: Necesita nombre string");
    });
    it('Should validate string',async ()=>{
      req.body.name = {msg:12}
      await serviceControllerInit.create(req, ResTest);
      expect(ResTest.sendBody.message).to.be.equal("Service validation failed: name: Cast to String failed for value \"{ msg: 12 }\" at path \"name\"");
    });
    it('Should insert new', async ()=>{
      await serviceControllerInit.create(req, ResTest);
      expect(ResTest.statusCode).to.be.equal(200);
      req2.params.service_id = ResTest.sendBody._id
    })
    it('Should validate douplicated',async ()=>{
      await serviceControllerInit.create(req, ResTest);
      expect(ResTest.sendBody.message).to.be.equal("E11000 duplicate key error collection: car_db_test.services index: name_1 dup key: { : \"prueba 1\" }");
    });
  });

  describe('delete', ()=>{
    it('Should validate bad ObjectId',async ()=>{
      req.params.service_id = 'asdas'
      await serviceControllerInit.delete(req, ResTest);
      expect(ResTest.sendBody.message).to.be.equal("Id invalido");
    });
    it('Should validate no id',async ()=>{
      req.params.service_id = null;
      await serviceControllerInit.delete(req, ResTest);
      expect(ResTest.sendBody.message).to.be.equal('No se encontro el valor');
    });
    it('Should delete one',async ()=>{
      await serviceControllerInit.delete(req2, ResTest);
      expect(ResTest.statusCode).to.be.equal(200);
    });
  });

  after(async ()=>{
    await Service.deleteMany({});
    console.log('delete');
  })
})
