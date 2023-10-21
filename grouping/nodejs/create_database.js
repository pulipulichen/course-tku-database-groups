const shell_spawn_sql = require('./shell_spawn_sql.js');

module.exports = async function (group) {

  var {name, password} = group

  var sql = [
    `CREATE DATABASE IF NOT EXISTS ${name};`,
    `DROP USER IF EXISTS '${name}'@'localhost';`,
    `CREATE USER '${name}'@'localhost' IDENTIFIED BY '${password}';`, 
    `GRANT ALL PRIVILEGES ON ${name}.* TO '${name}'@'localhost';`,
    `UPDATE mysql.user SET authentication_string = PASSWORD('${password}') WHERE User = '${name}';`
  ]

  // await shell_spawn_sql(sql)
  return sql.join('\n')
}