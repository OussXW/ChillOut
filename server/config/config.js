var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/chillout',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    rootPath: rootPath,
    db: 'mongodb://oussamanasr:chillout@ds035290.mongolab.com:35290/chillout',
    port: process.env.PORT || 80
  }
}