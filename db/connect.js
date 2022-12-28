const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config(); 

mongoose.set('strictQuery', false)



const connectDB = ()=>{
  return mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DB Connection Succesfull!'))
  .catch((error) =>{
    console.log(error)
  })
}

module.exports = connectDB