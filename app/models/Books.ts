import mongoose from 'mongoose';
const bcrypt = require('bcrypt');

const booksSchema = new mongoose.Schema({
  title: {
    type:String,
    required: [true, 'Name is required']
  },
  description:  {
    type: String,
    required: [true, 'Description is required'],
    lowercase: true,
  },
  author :  {
    type: String,
    required: [true, 'Author  is required'],
    lowercase: true,
  },
  category :  {
    type: String,
    required: [true, 'Category  is required'],
    lowercase: true,
  },
  pdf:{
    type:String,
    required: [true, 'PDF  is required'],
  },
  coverpage:{
    type:String,
    required: [true, 'Cover Page  is required'],
  },
  download:{
    type:Number,
    default:0
  },
  createdBy:  {
    type: mongoose.Schema.Types.ObjectId,
  },
  disabled:{
    type:Boolean,
    default:false
  },
    createdAt: Date,
    updatedAt: Date,

},{ timestamps: true });


const Book = mongoose.models.Book||mongoose.model('Book', booksSchema);

export default Book;