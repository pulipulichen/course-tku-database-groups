const shell_spawn_script = require('./shell_spawn_script.js');
const fs = require('fs')
const path = require('path')

module.exports = async function (group) {

  let {homePath, name, password} = group

  if (fs.existsSync(homePath)) {
    console.log(`${homePath} is existed.`)
    return true
  }

  let cmd = [
    `mkdir -p ${homePath}`,
    `useradd -m -d ${homePath} -p $(echo '${password}' | openssl passwd -1 -stdin) ${name}`
  ]

  await shell_spawn_script(cmd)
}