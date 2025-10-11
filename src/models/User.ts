import { Schema, CallbackError, model, models } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const hashedPassword = await bcrypt.hash(this.password, 12);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error as CallbackError);
  }
});

export default models.user || model('user', userSchema);
