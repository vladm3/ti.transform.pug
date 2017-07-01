const fs = require('fs-extra');
const pug = require('pug');
const BasePlugin = require('./BasePlugin');

class TransformPugPlugin extends BasePlugin {
  constructor() {
    super();
    this.validExtensions = new Set(['.jade', '.pug']);
    this.dstExtension = '.xml';
  }

  transformFile(srcPath, dstPath) {
    const xmlContent = pug.renderFile(srcPath, { pretty: true, doctype: 'xml' });
    this.log(`Transforming Pug file ${srcPath} -> ${dstPath}`);
    return fs.outputFile(dstPath, xmlContent)
      .then(() => [dstPath]);
  }
}

module.exports = TransformPugPlugin;