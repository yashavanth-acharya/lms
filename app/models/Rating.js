import mongoose from 'mongoose';

const ratingsSchema = new mongoose.Schema({
  book: {
    type:mongoose.Schema.Types.ObjectId,
  },
  rating:Number,
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
  },
    createdAt: Date,
    updatedAt: Date,
},{ timestamps: true });


const ratings = mongoose.model('ratings', ratingsSchema);

export default ratings;