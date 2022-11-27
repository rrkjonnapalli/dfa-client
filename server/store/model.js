const { DataTypes } = require('sequelize');

const Env = {
  modelName: 'Env',
  def: {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING
    },
    def: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING
    }
  },
  options: {
    tableName: 'environments',
    timestamps: true,
    modelName: 'Env',
    indexes: [
      { unique: true, fields: ['name'] }
    ]
  },
  appOpts: {
    allowOnce: new Set(['code'])
  }
};

const Service = {
  modelName: 'Service',
  def: {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    envType: {
      type: DataTypes.STRING
    },
    ssl: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    cluster: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  },
  options: {
    tableName: 'services',
    timestamps: true,
    modelName: 'Service',
    indexes: [
    ]
  }
};

const associations = [
]

module.exports = {
  Env,
  Service,
  associations,
  definitions: [
    Env,
    Service
  ]
}
