require('../models')
const sequelize = require("../utils/connection");
const userCreate = require('./createData/userData');

const testMigrate = async () => {

  try {

    await sequelize.sync({ force: true })
    console.log('DB reset ✅');
    await userCreate() //introduccion de usuario
    process.exit()
  } catch (error) {
    console.error(error);
  }
}


testMigrate()