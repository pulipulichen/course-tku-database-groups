const CONFIG = require('./load_config.js')
const hashPW = require('./hash_pw.js')

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
    let homePath = `${CONFIG.BASE_DIR}/${groupPrefix}`

    output.push({
      name: groupName,
      password: groupPassword,
      homePath: homePath
    })
  }

}

module.exports = output