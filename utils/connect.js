import mongoose from 'mongoose';

const connection = {isConnected:null}

export const connectToDB = async() =>{
  try {
    if(connection.isConnected){
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO_URL);
    connection.isConnected = db.connections[0].readyState; 
    console.log("New connection to DB created"); 
  } catch (error) {
    console.log("Error connecting to Database", error);
  }
}