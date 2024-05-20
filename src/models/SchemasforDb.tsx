// models/login.js

import mongoose, { model, models } from 'mongoose';


// Define the schema for login
const loginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create the model
const Login = models.Login || model('Login', loginSchema);


// Schema for Vehicle

const vehicleSchema = new mongoose.Schema({
  vehicleId: {
    type: String,
    required: true,
  },
  vehicleType: {
    type: String,
    required: true,
  },
  manager: {
    type: String,
    required: true,
  },
  driver: {
    type: String,
    required: true,
  },
  purchaseDate: {
    type: Date,
    required: true,
  },
  vehicleNumber: {
    type: String,
    required: true
  },
  tripsCount: {
    type: Number,
    default: 0,
  },
  licenseNumber: {
    type: String,
    required: true,
  },
  registration: {
    type: String,
    required: true,
  },
  image:[String]
  
});

const Vehicle = models.Vehicle||mongoose.model('Vehicle', vehicleSchema);

const TripSchema = new mongoose.Schema({
  vehicleId: {
    type: String,
    required: true,
  },

  driverId:{
    type : String,
    required : true
  },
  
  manager: {
    type: String,
    required: true,
  },
  driver: {
    type: String,
    required: true,
  },

  payableAmount: {
    type: String,
    required: true
  },

  assignVehicle:{
    type : String,
    required : true
  },

  name :{
    type : String,
    required : true    
  },

  contactNumber :{
    type : String,
    required : true    
  },

  email :{
    type : String,
    required : true    
  },

  dob :{
    type: String,
    required: true,    
  },

  nidNumber :{
    type : String,
    required : true    
  },

  pickup : {
    type : String,
    required: true,
  },

  drop : {
    type : String,
    required: true,
  },

  vehicleType: {
    type: String,
    required: true,
  },

  timeDate: {
    type: String,
    required: true,
  }
  
});

const Trip = models.Trip||mongoose.model('Trip', TripSchema);

export {Vehicle , Login , Trip} ;



