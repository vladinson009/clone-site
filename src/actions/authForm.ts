'use server';

import User from '@/models/User';
import { UserRegister } from '@/types/user';
import mongoose from 'mongoose';

type PrevState = UserRegister & { error: null | string };

export async function registerForm(prevState: PrevState, formData: FormData) {
  const emailInput = formData.get('email');
  const usernameInput = formData.get('username');
  const passwordInput = formData.get('password');
  const repassInput = formData.get('repass');

  const email = typeof emailInput === 'string' ? emailInput : '';
  const username = typeof usernameInput === 'string' ? usernameInput : '';
  const password = typeof passwordInput === 'string' ? passwordInput : '';
  const repass = typeof repassInput === 'string' ? repassInput : '';

  if (!email || !username || !password || !repass) {
    console.log('Empty fields');
    const returnValue: PrevState = {
      email,
      username,
      password,
      repass,
      error: 'Empty fields',
    };
    return returnValue;
  }
  if (password !== repass) {
    console.log('Passwords mismatch');
    const returnValue: PrevState = {
      email,
      username,
      password,
      repass,
      error: 'Passwords mismatch',
    };
    return returnValue;
  }
  await mongoose.connect(process.env.MONGODB_URI!);
  const user = await User.create({
    email: email,
    username: username,
    password: password,
  });

  return {
    email: user.email,
    username: user.username,
    error: null,
  } as PrevState;
}
