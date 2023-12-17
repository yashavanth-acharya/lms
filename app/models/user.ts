import mongoose from 'mongoose';
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type:String,
    required: [true, 'Name is required']
  },
  email:  {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: (value:any) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: 'Invalid email format',
    },
  },
  phone:{
    type:String,
    unique: true,
    required: [true, 'Phone is required ']
  },
  username:  {
    type: String,
    required: [true, 'Username is required '],
    unique: true,
    lowercase: true,
  },
  disabled:{
    type:Boolean,
    default:false
  },
  type:{
    type:String,
    default:'user'
  },
  password:{
    type:String,
    required: [true, 'Password is required ']
  },
    createdAt: Date,
    updatedAt: Date,

},{ timestamps: true });

userSchema.pre('save', function () {
	const hashedPassword = bcrypt.hashSync(this.password, 12);
	this.password = hashedPassword;
});
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;