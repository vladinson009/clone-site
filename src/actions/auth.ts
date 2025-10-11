'use server';

import { signIn, signOut } from '@/auth';

export async function githubLogin() {
  await signIn('github', { redirectTo: '/' });
}
export async function logout() {
  await signOut({ redirectTo: '/' });
}
