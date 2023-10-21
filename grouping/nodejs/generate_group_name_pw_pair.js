const CONFIG = require('./load_config.js')
const hashPW = require('./hash_pw.js')
const path = require('path')

var output = []
for (var c = 0; c < 2; c++) {
  var baseC = 'a'
  if (c === 1) {
    baseC = 'b'
  }

  for (var i = 1; i <= CONFIG.GROUP_NUMBER; i++) {
    var groupID = i
    if (groupID < 10) {
      groupID = '0' + groupID
    }
    var groupPrefix = `${CONFIG.YEAR}db${baseC}`
    var groupName = `${groupPrefix}${groupID}`
    var groupPassword = hashPW(groupName)
    var homePath = path.join(`${CONFIG.BASE_DIR}`, `${groupPrefix}/${groupName}`)

    output.push({
      name: groupName,
      group: groupPrefix,
      password: groupPassword,
      homePath: homePath
    })
  }
}

module.exports = output