const { ObjectId } = require('mongodb')
const {getAccountsCollection: accounts} = require("./db")

const listAccounts = async () => {
    let collection = await accounts() 
    return collection.find({}).toArray()
}

const findAccountByName = async (name) => {
    let collection = await accounts() 
    let result = await collection.findOne({username: name})
    return result
}

const deleteAccount = async (accountId) => {
    let collection = await accounts()  
    return collection.deleteOne({_id: ObjectId(accountId)})
}

const createAccount = async (username, password, game) => {
    let accountToCreate = {
        username,
        password,
        game
    }
    let collection = await accounts()
    let insertResult = await collection.insertOne(accountToCreate)
    return insertResult.ops[0]._id
}

const searchByNameFragment = async (nameFragment) => {   
    let matchNameFragment = new RegExp(`.*${nameFragment}.*`, 'i')
    let collection = await accounts()
    let cursor = collection.find({ "firstName": matchNameFragment })
    return cursor.toArray()
}


    

module.exports = {
    findAccountByName,
    createAccount,
    listAccounts,
    searchByNameFragment,
    deleteAccount
}