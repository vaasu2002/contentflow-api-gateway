const dotenv = require('dotenv');
dotenv.config({
    path: './.env'
});

const PORT = process.env.PORT || 3002;
const MONGODB_URI = process.env.MONGODB_URI;
const DATABASE_NAME = process.env.DATABASE_NAME;
const CORS_ORIGIN = process.env.CORS_ORIGIN;
const SALT_ROUNDS = process.env.SALT_ROUNDS;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRY = process.env.JWT_EXPIRY;
const ADMIN_SERVER = process.env.ADMIN_SERVER;
const DATA_ACCESS_SERVER = process.env.DATA_ACCESS_SERVER;

module.exports = {
    PORT,
    DATABASE_NAME,
    MONGODB_URI,
    CORS_ORIGIN,
    SALT_ROUNDS,
    JWT_SECRET,
    JWT_EXPIRY,
    ADMIN_SERVER,
    DATA_ACCESS_SERVER
};