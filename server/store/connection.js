const path = require('path');
const { Sequelize } = require('sequelize');
const { SQLITE_DB_PATH, SQLITE_LOG, EXTERNAL_DIR } = require('@config');

const { definitions, associations } = require('./model');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../..',  EXTERNAL_DIR , SQLITE_DB_PATH),
  logging: SQLITE_LOG
});

let models = {};
const register = ({ definitions }) => {
  for (let definition of definitions) {
    const { modelName, def, options } = definition;
    models[modelName] = sequelize.define(modelName, def, options);
  }

  for (let association of associations) {
    const { from, to, type, options } = association;
    models[from][type](models[to], options);
  }

};

register({ definitions });

const setupModels = async ({ sync } = {}) => {
  if (sync) {
    return sequelize.sync({ force: true });
  }
}

module.exports = {
  sequelize,
  models,
  setupModels,
  definitions
};
