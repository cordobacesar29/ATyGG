const { Sequelize, DataTypes } = require('sequelize');

const { conOpt } = require('./config/keys');

const UserModel = require('./models/User');

const sequelize = new Sequelize(conOpt.database, conOpt.user, conOpt.password, {
  dialect: conOpt.dialect,
  host: conOpt.host,
  port: conOpt.port,
});

const User = UserModel(sequelize, DataTypes);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('\ndb connected\n');
    // await sequelize.sync({ force: true });
    console.log('\nsynchronized tables\n');
  } catch (err) {
    console.error(err);
  }
})();

module.exports = { User };
