import 'mocha';
import { expect, assert } from 'chai';
import "chai/register-should";
import Shop from '../models/shopModel';
import initTest from './testHelper';
import ResTest from './resHelper';
import mongoose from 'mongoose';
import { ShopController } from '../controllers/shopController';

initTest();
const shopControllerInit = new ShopController();

describe('Shop',()=>{
  let req;
  beforeEach(()=>{
    req = {
      body:{
        name:"alfonsoShop",
        email:"alfonsocvdu@gmail.com",
        password:"123456",
        services:["5dda184cf6ee050b14e8046a"]
      },
      query:{
        service_id:"5dda184cf6ee050b14e8046a"
      }
    }
  })

  describe('create',()=>{
    it('Should say that you dident send required values',async ()=>{
      req.body = {}
      await shopControllerInit.create(req, ResTest)
      console.log(ResTest.sendBody.message);
      expect(ResTest.statusCode).to.be.equal(400)
    });
    it('Should tell the ObjectId its wrong',async ()=>{
      req.body.services = ["asdajsd"]
      await shopControllerInit.create(req, ResTest)
      expect(ResTest.sendBody.message).to.be.equal("Shop validation failed: services: Cast to Array failed for value \"[ 'asdajsd' ]\" at path \"services\"");
    });
    it('Should return a new shop',async ()=>{
      await shopControllerInit.create(req, ResTest)
      expect(ResTest.statusCode).to.be.equal(200)
    });
    it('Should say email duplicated',async ()=>{
      await shopControllerInit.create(req, ResTest)
      expect(ResTest.statusCode).to.be.equal(400)
    });
  });

  describe('login',()=>{
    it('Should not login bad email',async ()=>{
      req.body = {}
      await shopControllerInit.login(req, ResTest);
      expect(ResTest.sendBody.msg).to.be.equal("El correo o la contraseña son incorrectos");
    });
    it('Should not login bad password',async ()=>{
      req.body.password = "golasd"
      await shopControllerInit.login(req, ResTest);
      expect(ResTest.sendBody.msg).to.be.equal("El correo o la contraseña son incorrectos");
    });
    it('Should login',async ()=>{
      await shopControllerInit.login(req, ResTest);
      expect(ResTest.statusCode).to.be.equal(200);
    });
  });

  describe('get all',()=>{
    it('Should tell the ObjectId its wrong',async ()=>{
      req.query.service_id = "afsausiodha";
      await shopControllerInit.getAll(req, ResTest);
      expect(ResTest.sendBody.msg).to.be.equal("Argument passed in must be a single String of 12 bytes or a string of 24 hex characters");
    });
    it('Should bring array all shops',async ()=>{

    });
    it('Should bring array all shops that change balatas',async ()=>{

    });
  });

  after(async ()=>{
    await Shop.deleteMany({});
    console.log('delete');
  })
})
