const db = require("./db")

async function createAccount(firstName, lastName, password) {
    let accountToCreate = {
        firstName,
        lastName,
        password
    }
    let accountsCollection = await db.getCollection("accounts")
    let insertResult = await accountsCollection.insertOne(accountToCreate)
    return insertResult.ops[0]._id
}

async function listAccounts() {
    let accountsCollection = await db.getCollection("accounts")
    let cursor = accountsCollection.find({})
    return cursor.toArray()
}

module.exports = {
    createAccount,
    listAccounts
}