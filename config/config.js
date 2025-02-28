const dotenv = require('dotenv');

const env = process.env.NODE_ENV || 'dev';
dotenv.config({ path: `.env.${env}` });

module.exports = {
  port: process.env.PORT || 4000,
  dbUri: process.env.DB_URI,
};
