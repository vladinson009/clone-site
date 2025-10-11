import { Types } from 'mongoose';

export type UserType = {
  _id: string;
  email: string;
  username: string;
  role: string;
  tokenVersion: number;
};
export type UserLogin = {
  email: string;
  password: string;
};
export type UserRegister = {
  email: string;
  username: string;
  password: string;
  repass: string;
};
export interface AuthUser {
  _id: string;
  username: string;
  email: string;
  role?: string;
  iat?: number; // issued at
  exp?: number; // expiration timestamp
}
