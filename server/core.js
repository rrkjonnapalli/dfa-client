const shell = require('shelljs');
const path = require('path');
const fs = require('fs/promises');
const config = require('@config');

const externalPath = path.join(__dirname, '..', config.CLONE_DIR);

const run = (cmd, opts = {}) => {
  return new Promise((resolve) => {
    shell.exec(cmd, opts, (code, output, error) => {
      return resolve({
        code,
        output,
        error
      });
    });
  });
};

const gitClone = async () => {
  const repo = config.REPO_LINK;
  shell.cd(externalPath);
  await fs.rm(config.REPO_DIR, { recursive: true }).then(() => {
    console.log('Previous version successfully removed');
  }).catch((e) => {
    if (e.code !== 'ENOENT') {
      throw e;
    }
  });
  return run(`git clone ${repo} ${config.REPO_DIR}`).then((data) => {
    console.log('Repository successfully cloned');
  });
};


module.exports = {
  gitClone
}
