const mongo = require('mongodb').MongoClient;
const client = require('socket.io')(4000)

//Connect to mongo
mongo.connect('mongodb://127.0.0.1/mongochat', {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
    if(err) {
        throw err;
    }

    console.log('MongoDb connected...')
})