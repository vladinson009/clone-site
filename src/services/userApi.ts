import { connectDB, disconnectDB } from '@/lib/mongoose';
import User from '@/models/User';
import { UserLogin, UserRegister, UserType } from '@/types/user';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

async function isUser(email: string, username?: string) {
  try {
    const isUser = await User.findOne({
      $or: [{ email: email }, { username: username }],
    });
    if (isUser) {
      if (isUser.email === email) {
        throw new Error('Email already exists!');
      } else if (isUser.username === username) {
        throw new Error('Username already exists!');
      }
    }
  } catch (error) {
    throw error;
  }
}

export async function loginUser(userData: UserLogin) {
  try {
    await connectDB();
  } catch (error) {
    throw new Error('DB Connection failed');
  }

  try {
    const user = await User.findOne({ email: userData.email });
    if (!user) {
      throw new Error('Invalid email or password!');
    }
    const isValidPassword = await bcrypt.compare(userData.password, user.password);
    if (!isValidPassword) {
      throw new Error('Invalid email or password');
    }

    const returnValue: UserType = {
      _id: user._id.toString(),
      email: user.email,
      username: user.username,
      tokenVersion: user.tokenVersion,
      role: user.role,
    };
    await disconnectDB();
    return returnValue;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(userData: Omit<UserRegister, 'repass'>) {
  try {
    await connectDB();
  } catch (error) {
    throw new Error('DB Connection failed');
  }
  await isUser(userData.email, userData.username);
  try {
    const user = await User.create(userData);
    const returnValue: UserType = {
      _id: user._id.toString(),
      email: user.email,
      username: user.username,
      tokenVersion: user.tokenVersion,
      role: user.role,
    };
    await disconnectDB();
    return returnValue;
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const errors = Object.values(error.errors).map((el) => el.message);
      throw new Error(errors.join(', '));
    } else {
      console.log('Uncatched error from MONGOOSE SCHEMA');

      console.log(error);
      throw error;
    }
  }
}
export function logoutUserInvalidation(userId: string) {
  return User.findByIdAndUpdate(userId, { $inc: { tokenVersion: 1 } });
}
