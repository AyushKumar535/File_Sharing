import mongoose from "mongoose";



const DBConnection  = async() => {
  const MONGODB_URL = 'mongodb+srv://Ayush:Ayush1kumar%40@file-sharing.g4ltdmj.mongodb.net/?retryWrites=true&w=majority';
  try{
    await mongoose.connect(MONGODB_URL);
    console.log("database connected")
  }catch (error)
  {
    console.log('Error while connecting with the database',error.message);
  }
}

export default DBConnection;