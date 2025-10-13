import mongoose, { Mongoose } from 'mongoose';
import { MONGODB_URI } from '@/constants/environment';

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is missing in environment variables');
}

// Extend the NodeJS global object to add mongoose caching
declare global {
  // eslint-disable-next-line no-var
  var mongoose: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  };
}

// Initialize global.mongoose if it doesn't exist
const cached = global.mongoose || { conn: null, promise: null };

export async function connectDB(): Promise<Mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false,
        // you can add other options here
      })
      .then((mongooseInstance) => {
        return mongooseInstance;
      });
  }

  cached.conn = await cached.promise;
  global.mongoose = cached;
  return cached.conn;
}
