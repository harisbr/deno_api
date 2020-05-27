const env = Deno.env.toObject();
const PORT = env.PORT || 4000;
const HOST = env.HOST || 'localhost';
const DB_NAME = env.DB_NAME || 'deno_api';
const DB_URL = env.DB_URL || 'mongodb://localhost:27017';
const JWT_KEY = env.JWT_KEY || 'wbwyCge0lsYhW9Gt34nF';

export {
  PORT,
  HOST,
  DB_NAME,
  DB_URL,
  JWT_KEY
};
