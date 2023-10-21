
const GROUP_NAME_PW_PAIR = require('./generate_group_name_pw_pair.js')
const create_user = require('./create_user.js')
const create_database = require('./create_database.js')

let main = async () => {
  // console.log(GROUP_NAME_PW_PAIR)
  // return false

  for (let i = 0; i < GROUP_NAME_PW_PAIR.length; i++) {
    let group = GROUP_NAME_PW_PAIR[i]

    await create_user(group)
    await create_database(group)
  }
}

main()