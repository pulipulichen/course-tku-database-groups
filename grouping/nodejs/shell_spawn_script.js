const shell_spawn = require('./shell_spawn.js');
const fs = require('fs');
const path = require('path')

module.exports = async function (cmdString) {
  var scriptPath = path.join(__dirname, '../tmp/shell_spawn.sh');

  if (Array.isArray(cmdString)) {
    cmdString = cmdString.join('\n')
  }

  if (cmdString.trim().startsWith('#!') === false) {
    cmdString = '#!/bin/bash\n\n' + cmdString
  }

  fs.writeFileSync(scriptPath, cmdString, 'utf-8')

  fs.chmodSync(scriptPath, 0o755)

  var output = await shell_spawn(scriptPath)

  fs.unlinkSync(scriptPath)

  return output
}