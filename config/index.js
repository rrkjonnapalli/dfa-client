const SQLITE_DB_PATH = process.env.SQLITE_DB_PATH || 'data/db.db'
const SQLITE_SYNC = process.env.SQLITE_SYNC === 'true';
const SQLITE_LOG = process.env.SQLITE_LOG || false;
const SERVCIE_LIST = process.env.SERVCIE_LIST || 'vpc,kibana,elasticsearch,kafka,zk,jenkins,nexus,grafana,mongo,rabbitmq,prometheus';
const ENV_TYPES = process.env.ENV_TYPES || 'Production,Staging,Test,Development,UA';

module.exports = {
  EXTERNAL_DIR: 'external',
  REPO_DIR: 'repo',
  REPO_LINK: 'https://github.com/subhamproject/shell_script_repo.git',
  PORT: process.env.PORT || '8090',
  NODE_ENV: process.env.NODE_ENV || 'development',
  SQLITE_DB_PATH,
  SQLITE_SYNC,
  SQLITE_LOG,
  SERVCIES: SERVCIE_LIST.split(',').filter(s => s.trim()),
  ENV_TYPES: ENV_TYPES.split(',').filter(s => s.trim()),
};
