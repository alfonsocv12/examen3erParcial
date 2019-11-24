import 'mocha';
import { expect, assert } from 'chai';
import "chai/register-should";
import Appointment from '../models/appointmentModel';
import initTest from './testHelper';
import ResTest from './resHelper';
import mongoose from 'mongoose';
import { AppointmentController } from '../controllers/appointmentController';

initTest();
const appointmentControllerInit = new AppointmentController();

describe.only('appointment',()=>{

  beforeEach(()=>{
    req = {
      body:{},
      params:{}
    }
  });

  describe('create',()=>{
    it('',async ()=>{

    });
    it('',async ()=>{

    });
    it('',async ()=>{

    });
  });

  describe('update',()=>{
    it('',async ()=>{

    });
    it('',async ()=>{

    });
    it('',async ()=>{

    });
  });

  describe('appointmentStatusTypes',()=>{
    it('Should return array of status types',()=>{
      appointmentControllerInit.appointmentStatusTypes(req, ResTest);
      expect(ResTest.statusCode).to.be.equal(200);
    });
  });

  after(async ()=>{
    await Appointment.deleteMany({});
    console.log('delete');
  })
})
