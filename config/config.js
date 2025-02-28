const dotenv = require('dotenv');

const env = process.env.NODE_ENV || 'dev';
dotenv.config({ path: '.env.${env}' });

module.exports = {
    port: process.env.PORT,
    dbUri: process.env.DB_URI,
};