const CONFIG = require('./load_config.js')

const GROUP_NAME_PW_PAIR = require('./generate_group_name_pw_pair.js')
const create_user = require('./create_user.js')
const create_database = require('./create_database.js')

const fs = require('fs')
const path = require('path')

let main = async () => {
  // console.log(GROUP_NAME_PW_PAIR)
  // return false

  let outputScript = []
  let outputSQL = []
  for (let i = 0; i < GROUP_NAME_PW_PAIR.length; i++) {
    let group = GROUP_NAME_PW_PAIR[i]

    outputScript.push(await create_user(group))
    outputSQL.push(await create_database(group))
  }

  let scriptPath = path.join(__dirname, '../tmp/script.sh')
  let sqlPath = path.join(__dirname, '../tmp/script.sql')

  fs.writeFileSync(scriptPath, `#!/bin/bash

cd "$(dirname "$0")"

${outputScript.join('\n\n')}

mysql -u ${CONFIG.MYSQL_USER} -p'${CONFIG.MYSQL_PASSWORD}' < script.sql`, 'utf-8')
  fs.chmodSync(scriptPath, 0o755)

  fs.writeFileSync(sqlPath, outputSQL.join('\n\n'), 'utf-8')
  fs.chmodSync(sqlPath, 0o755)
}

main()