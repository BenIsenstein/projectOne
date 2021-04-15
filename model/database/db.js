const MongoClient = require('mongodb').MongoClient

const dbUrl = 'mongodb://localhost:27017'
const databaseName = 'projectOneBenIsensteinC6'

let connectMongoClient = MongoClient.connect(dbUrl, { useUnifiedTopology: true })

let getDb = connectMongoClient.then(client => client.db(databaseName))

const getCollection = name => getDb.then(db => db.collection(name))

const getAccountsCollection = async () => getCollection("accounts")

const close = () => connectMongoClient.then(client => client.close())



module.exports = {
    getDb,
    getCollection,
    close,
    getAccountsCollection
}