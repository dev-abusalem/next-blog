import mongoose from "mongoose";


// Mongo Connection
const dbconnection = async () =>{
try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    handleError(error);
  }

}

export default dbconnection;