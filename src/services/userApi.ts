import { connectDB, disconnectDB } from '@/lib/mongoose';
import User from '@/models/User';
import { UserLogin, UserRegister, UserType } from '@/types/user';

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
    throw error;
  }
}
