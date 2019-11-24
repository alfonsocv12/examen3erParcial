import 'mocha';
import { expect, assert } from 'chai';
import "chai/register-should";
import Appointment from '../models/appointmentModel';
import initTest from './testHelper';
import ResTest from './resHelper';
import mongoose from 'mongoose';
import { AppointmentController } from '../controllers/appointmentController';

initTest();
const serviceControllerInit = new ServiceController();

describe.only('appointment',()=>{
  
})
