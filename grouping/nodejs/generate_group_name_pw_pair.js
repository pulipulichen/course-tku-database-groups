
for (let i = 1; i <= CONFIG.GROUP_NUMBER; i++) {
  for (let i = 1; i <= number; i++) {
    let groupID = i
    if (groupID < 10) {
      groupID = '0' + groupID
    }
    let groupNameA = `${year}dba${groupID}`
    let groupPasswordA = hashPW(groupNameA)
    let groupNameB = `${year}dbb${groupID}`
    let groupPasswordB = hashPW(groupNameB)

    output.push([
      i,
      groupNameA,
      groupPasswordA,
      i,
      groupNameB,
      groupPasswordB
    ])
  }
}