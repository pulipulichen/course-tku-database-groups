const CONFIG = require('./load_config.js')
const fs = require('fs')
const path = require('path')
const shell_spawn_script = require('./shell_spawn_script')

module.exports = async function (sql) {
  let sqlPath = path.join(__dirname, '../tmp/script.sql');

  if (Array.isArray(sql)) {
    sql = sql.map(l => {
      if (l.endsWith(';') === false) {
        l = l + ';'
      }
      return l
    }).join('\n\n')
  }

  fs.writeFileSync(sqlPath, sql, 'utf-8')

  let cmd = `mysql -u ${CONFIG.MYSQL_USER} -p'${CONFIG.MYSQL_PASSWORD}' < ${sqlPath}`
  let output = false
  try {
    output = await shell_spawn_script(cmd)
    // console.log(sql)
  }
  catch (e) {
    console.error(e)
  }
    

  fs.unlinkSync(sqlPath)

  return output
}