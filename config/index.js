const SQLITE_DB_PATH = process.env.SQLITE_DB_PATH || 'data/db.db'
const SQLITE_SYNC = process.env.SQLITE_SYNC === 'true';
const SQLITE_LOG = process.env.SQLITE_LOG || false;

module.exports = {
  EXTERNAL_DIR: 'external',
  REPO_DIR: 'repo',
  REPO_LINK: 'https://github.com/subhamproject/shell_script_repo.git',
  PORT: process.env.PORT || '8090',
  NODE_ENV: process.env.NODE_ENV || 'development',
  SQLITE_DB_PATH,
  SQLITE_SYNC,
  SQLITE_LOG
}
