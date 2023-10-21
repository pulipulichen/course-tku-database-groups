const CONFIG = require('./load_config.js')
const hashPW = require('./hash_pw.js')
const path = require('path')

let output = []
for (let c = 0; c < 2; c++) {
  let baseC = 'a'
  if (c === 1) {
    baseC = 'b'
  }

  for (let i = 1; i <= CONFIG.GROUP_NUMBER; i++) {
    let groupID = i
    if (groupID < 10) {
      groupID = '0' + groupID
    }
    let groupPrefix = `${CONFIG.YEAR}db${baseC}`
    let groupName = `${groupPrefix}${groupID}`
    let groupPassword = hashPW(groupName)
    let homePath = path.join(`${CONFIG.BASE_DIR}`, `${groupPrefix}/${groupName}`)

    output.push({
      name: groupName,
      group: groupPrefix,
      password: groupPassword,
      homePath: homePath
    })
  }
}

module.exports = output