const shell_spawn = require('./shell_spawn.js');
const fs = require('fs');
const path = require('path')

module.exports = async function (cmdString) {
  let scriptPath = path.join(__dirname, '../tmp/shell_spawn.sh');

  fs.writeFileSync(scriptPath, cmdString, 'utf-8')

  fs.chmodSync(scriptPath, 0o755)

  let output = await shell_spawn(scriptPath)

  fs.unlinkSync(scriptPath)

  return output
}