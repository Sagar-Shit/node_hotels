const mongoose=require('mongoose');

// Define the MongoDB connection URL
const mongoURL='mongodb://localhost:27017/hotels'

//set up mongodb connection
mongoose.connect(mongoURL)

//get the default connection
//mongoose maintains a default connection object representing the mongoose connection
const db=mongoose.connection;

//define event listeners for database connection
db.on('connected',()=>{
    console.log('connected to mongodb server');

});
db.on('error',(err)=>{
    console.error('connected to mongodb server',err);

});
db.on('disconnected',()=>{
    console.log('mongodb disconnected');

});

//export the database connection
module.exports=db;