import { Sequelize } from "sequelize";

const connectionDb = new Sequelize("Clase 9", "sa", "43446229", {
    host: '127.0.0.1',
    port: 1433,
    dialect: 'mssql'
    });

try {
    await connectionDb.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

export default connectionDb