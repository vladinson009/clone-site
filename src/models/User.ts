import { Schema, CallbackError, model, models } from 'mongoose';
import bcrypt from 'bcrypt';
import {
  EMAIL_MIN_LENGTH,
  PASSWORD_MIN_LENGTH,
  ROLES_ENUM,
  USER_EXPIRES_AFTER,
  USERNAME_MIN_LENGTH,
} from '@/constants/user-constants';
import { BCRYPT_HASH_ROUNDS } from '@/constants/bcrypt';

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: [
        USERNAME_MIN_LENGTH,
        `Username shoud be at least ${USERNAME_MIN_LENGTH} characters long.`,
      ],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minLength: [
        EMAIL_MIN_LENGTH,
        `Email should be at least ${EMAIL_MIN_LENGTH} characters long.`,
      ],
    },
    password: {
      type: String,
      required: true,
      minLength: [
        PASSWORD_MIN_LENGTH,
        `Password shoud be at least ${EMAIL_MIN_LENGTH} characters long.`,
      ],
    },
    role: {
      type: String,
      enum: ROLES_ENUM,
      default: 'user',
    },
    tokenVersion: {
      type: Number,
      default: 1,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { collation: { locale: 'en', strength: 2 }, timestamps: true }
);

userSchema.index({ deletedAt: 1 }, { expireAfterSeconds: USER_EXPIRES_AFTER });

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    if (this.password.length < PASSWORD_MIN_LENGTH) {
      throw new Error('Password validation error from user PRE-SCHEMA');
    }
    const hashedPassword = await bcrypt.hash(this.password, BCRYPT_HASH_ROUNDS);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error as CallbackError);
  }
});

export default models.user || model('user', userSchema);
// export default model('user', userSchema);
/** // TODO:
 * flag to isDeleted true and add deletedAt
const expireDate = new Date(Date.now()); // now, since TTL counts from this field

await User.findByIdAndUpdate(userId, {
  isDeleted: true,
  deletedAt: expireDate,
});
 
 */
