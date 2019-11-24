import 'mocha';
import { expect, assert } from 'chai';
import "chai/register-should";
import Shop from '../models/shopModel';
import initTest from './testHelper';
import {res} from 'express/response'
import { ResTest} from './resHelper';
import mongoose from 'mongoose';
import { ShopController } from '../controllers/shopController';

initTest();
const shopControllerInit = new ShopController();

describe('Shop',()=>{
  describe('create',()=>{
    it('Should say that you dident send required values',async ()=>{
      // const resTestInit = new ResTest();
      // const req = {body:{}}
      console.log(res);
      // await shopControllerInit.create(req, resTestInit)
      // console.log(resTestInit);
    });
    it('Should tell the ObjectId its wrong',()=>{

    });
    it('Should return a new shop',()=>{

    });
    it('Should say email duplicated',()=>{

    });
  });
  describe('login',()=>{
    it('Should not login bad email');
    it('Should not login bad password');
    it('Should login');
  });
  describe('get all',()=>{
    it('Should tell the ObjectId its wrong');
    it('Should bring array all shops');
    it('Should bring array all shops that change balatas');
  });
})
