import mongoose from 'mongoose';
import dotenv from 'dotenv';
import "regenerator-runtime/runtime";

dotenv.config();

const initTest = () =>{
  mongoose.Promise = Promise
  async function run() {
      await mongoose.connect(process.env.MONGODB_URI_TEST, {
          autoReconnect: true,
          reconnectTries: 1000000,
          reconnectInterval: 3000,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false
      })
  }
  run().catch(error => console.error(error));
}

export default initTest;
