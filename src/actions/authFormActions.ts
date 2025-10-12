'use server';

import { createAuthToken, deleteAuthToken, getAuthUser } from '@/lib/authCookie';
import { loginUser, logoutUserInvalidation, registerUser } from '@/services/userApi';
import { UserLogin, UserRegister } from '@/types/user';
import { redirect } from 'next/navigation';

type RegisterPrevState = UserRegister & { error: null | string };
type LoginPrevState = UserLogin & { error: null | string };

export async function registerForm(
  prevState: RegisterPrevState,
  formData: FormData
) {
  const emailInput = formData.get('email');
  const usernameInput = formData.get('username');
  const passwordInput = formData.get('password');
  const repassInput = formData.get('repass');

  const email = typeof emailInput === 'string' ? emailInput : '';
  const username = typeof usernameInput === 'string' ? usernameInput : '';
  const password = typeof passwordInput === 'string' ? passwordInput : '';
  const repass = typeof repassInput === 'string' ? repassInput : '';

  if (!email || !username || !password || !repass) {
    const returnValue: RegisterPrevState = {
      email,
      username,
      password,
      repass,
      error: 'All fields are required',
    };
    return returnValue;
  }
  if (password !== repass) {
    const returnValue: RegisterPrevState = {
      email,
      username,
      password,
      repass,
      error: 'Passwords mismatch',
    };
    return returnValue;
  }
  try {
    const user = await registerUser({ email, username, password });
    await createAuthToken(user);
  } catch (error) {
    if (error instanceof Error) {
      return {
        email,
        username,
        password,
        repass,
        error: error.message,
      };
    } else {
      return {
        email,
        username,
        password,
        repass,
        error: 'unhandled error in SERVER ACTION: ' + error,
      };
    }
  }
  redirect('/');
}
export async function logoutUser() {
  const token = await getAuthUser();
  if (token) {
    logoutUserInvalidation(token._id);
  }
  await deleteAuthToken();
  redirect('/');
}

export async function loginForm(prevState: LoginPrevState, formData: FormData) {
  const emailInput = formData.get('email');
  const passwordInput = formData.get('password');

  const email = typeof emailInput === 'string' ? emailInput : '';
  const password = typeof passwordInput === 'string' ? passwordInput : '';

  if (!email || !password) {
    const returnValue: LoginPrevState = {
      email,
      password,
      error: 'All fields are required!',
    };
    return returnValue;
  }

  try {
    const user = await loginUser({ email, password });
    await createAuthToken(user);
  } catch (error) {
    if (error instanceof Error) {
      return {
        email,
        password,
        error: error.message,
      };
    } else {
      return {
        email,
        password,
        error: 'Error from Login Action ' + error,
      };
    }
  }
  redirect('/');
}
