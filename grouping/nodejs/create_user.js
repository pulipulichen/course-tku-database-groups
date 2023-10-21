const shell_spawn_script = require('./shell_spawn_script.js');

module.exports = async function (group) {

  let {homePath, name, password} = group

  let cmd = [
    `mkdir -p ${homePath}`,
    `useradd -m -d ${homePath} -p $(echo '${password}' | openssl passwd -1 -stdin) ${name}`
  ]

  await shell_spawn_script(cmd)
}