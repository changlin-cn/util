/**
 * Created by hechanglin on 2017/9/6 0006.
 */

const path     = require('path'),
      fs       = require('fs'),
      jsdoc2md = require('jsdoc-to-markdown');

jsdoc2md.render({
    files: 'src/*.js',
    template:require('./README.tpl.js').tpl
}).then(d => {
    fs.writeFile(path.resolve(__dirname, 'README.md'), d)
})