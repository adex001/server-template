import { sequelize } from './models';

sequelize
  .authenticate()
  .then(() => {
    console.log('Sequelize connection was successful');
  })
  .catch((err) => {
    console.error(err.message);
    throw Error('could not establish connection to database, check database connections');
  });
