import path from 'path';
import '@config';

module.exports = {
  development: {
    url: process.env.DB_URL || '',
    logging: (e) => console.log(e),

  },
  staging: {
    url: process.env.DB_URL || '',
    logging: false,
  },
  test: {
    dialect: 'sqlite',
    storage: path.join(__dirname, '..', 'database.sqlite3'),
    logging: (e) => {
      console.log(e);
    },
  },
  production: {
    url: process.env.DB_URL_PRODUCTION || '',
    logging: false,
  },
};
