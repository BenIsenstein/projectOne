let accounts = require('./model/database/accounts')
let db = require('./model/database/db')


let nameVar = 'username'
// accounts.findAccountByName(nameVar).then(account => {
//   console.log(`account under '${nameVar}': `, account)
//   db.close()
// })


// async function validateName(username) {
//   let bool = true
//   let accountExists = await accounts.findAccountByName(username)

//   if (accountExists) {
//     bool = false 
//     console.log('account exists.')
//   }
//   db.close()
  
//   return bool
// }

async function validateName(username) {
  let accountExists = await accounts.findAccountByName(username)    
  db.close() 
  return !accountExists
}

validateName('userme').then(bool => console.log(bool))

// (async () => {
//   let account = await accounts.findAccountByName(nameVar)
//   return account
// })()

