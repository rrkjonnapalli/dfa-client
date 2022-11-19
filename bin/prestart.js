const fs = require('fs/promises');
const path = require('path');
const config = require('../config');

const externalPath = path.join(__dirname, '..', config.EXTERNAL_DIR);


const init = async () => {
  const stats = await fs.stat(externalPath).catch(async (e) => {
    if (e.code === 'ENOENT') {
      console.log('finallly');
      await fs.mkdir(externalPath);
      return fs.stat(externalPath);
    }
    throw e;
  });
  console.log(`Directory initialization ${stats.isDirectory() ? 'successfull' : 'failed'}`);
}

init().catch((e) => {
  console.log('here', e);
});
