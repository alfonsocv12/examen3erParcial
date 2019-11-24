import 'mocha';
import { expect, assert } from 'chai';
import "chai/register-should";
import Shop from '../models/shopModel';
import initTest from './testHelper';
import mongoose from 'mongoose';
import { ShopController } from '../controllers/shopController';

const shopController = new ShopController();

describe('Shop',()=>{
  describe('create',()=>{

  });
  describe('login',()=>{

  });
  describe('get all',()=>{
    it('Should bring array all shops');
  });
})
