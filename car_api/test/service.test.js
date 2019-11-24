import 'mocha';
import { expect, assert } from 'chai';
import "chai/register-should";
import Shop from '../models/shopModel';
import initTest from './testHelper';
import ResTest from './resHelper';
import mongoose from 'mongoose';
import { ServiceController } from '../controllers/serviceController';

initTest();
const serviceControllerInit = new ServiceController();

describe.only('service',()=>{
  let req;
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
    it('',async ()=>{

    });
    it('',async ()=>{

    });
    it('',async ()=>{

    });
  });

  describe('delete', ()=>{
    it('',async ()=>{

    });
    it('',async ()=>{

    });
    it('',async ()=>{

    });
  });
})
