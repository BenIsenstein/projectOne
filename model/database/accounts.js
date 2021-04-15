const { ObjectId } = require('mongodb')
const {getAccountsCollection: accounts} = require("./db")

const listAccounts = async () => {
    let collection = await accounts() 
    return collection.find({}).toArray()
}

const deleteAccount = async (accountId) => {
    let collection = await accounts()  
    return collection.deleteOne({_id: ObjectId(accountId)})
}

const createAccount = async (firstName, lastName, password) => {
    let accountToCreate = {
        firstName,
        lastName,
        password
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
    createAccount,
    listAccounts,
    searchByNameFragment,
    deleteAccount
}