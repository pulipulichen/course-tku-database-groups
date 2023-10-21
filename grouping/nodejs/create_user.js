const shell_spawn_script = require('./shell_spawn_script.js');
const fs = require('fs')
const path = require('path')

module.exports = async function (groupItem) {

  var {homePath, name, group, password} = groupItem

  if (fs.existsSync(homePath)) {
    console.log(`${homePath} is existed.`)
    return true
  }

  var cmd = [
    `mkdir -p ${homePath}`,
    `groupadd ${group} || true`,
    `useradd -m -d ${homePath} -g ${group} -p $(echo '${password}' | openssl passwd -1 -stdin) ${name} || true`,
    `chown ${name}:${group} ${homePath}`,
    `chmod g+r+x ${homePath}`,
    `chown :${group} ${path.resolve(homePath, '../')}`,
    `chmod g+r+x ${path.resolve(homePath, '../')}`,
    `cp -f ${path.resolve(__dirname, '../assets/index.php')} ${homePath}`
  ]

  // try {
  //   await shell_spawn_script(cmd)
  // }
  // catch (e) {
  //   console.error(e)
  // }

  console.log(`${name}\t${password}`)

  return cmd.join(`\n`)
}