import { MONGODB_URI } from '@/constants/environment';
import mongoose from 'mongoose';

const db = mongoose;

export function connectDB() {
  return db.connect(MONGODB_URI);
}
export function disconnectDB() {
  return db.disconnect();
}
