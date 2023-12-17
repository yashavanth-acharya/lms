import mongoose from 'mongoose';

const tokenSchema = new mongoose.Schema({
  token: {
    type:String,
  },
  payload:{
    type:mongoose.Schema.Types.Mixed,
  },
    createdAt: Date,
    updatedAt: Date,
},{ timestamps: true });


const Token = mongoose.model('token', tokenSchema);

export default Token;