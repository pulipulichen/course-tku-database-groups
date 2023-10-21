const CONFIG = require('./load_config.js')
const fs = require('fs')
const path = require('path')
const shell_spawn_script = require('shell_spawn_script')

module.exports = async function (sql) {
  let sqlPath = path.join(__dirname, '../tmp/script.sql');

  if (Array.isArray(cmdString)) {
    cmdString = cmdString.map(l => {
      if (l.endsWith(';') === false) {
        l = l + ';'
      }
      return l
    }).join('\n\n')
  }

  fs.writeFileSync(sqlPath, sql, 'utf-8')

  let cmd = `mysql -u ${MYSQL_USER} -p'${MYSQL_PASSWORD}' < ${sqlPath}`
  let output = await shell_spawn_script(cmd)

  fs.unlinkSync(sqlPath)

  return output
}