import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { JWT_SECRET, NODE_ENV } from '@/constants/environment';
import type { UserType } from '@/types/user';

export async function getAuthUser(): Promise<UserType | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('session')?.value;

  if (!token) return null;

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as UserType;
    return decoded;
  } catch (error) {
    cookieStore.delete('session');
    return null;
  }
}
export async function createAuthToken(payload: UserType) {
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '7d',
  });
  const cookieStore = await cookies();
  cookieStore.set('session', token, {
    httpOnly: true,
    secure: NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}
export async function deleteAuthToken() {
  const cookie = await cookies();
  cookie.delete('session');
}
