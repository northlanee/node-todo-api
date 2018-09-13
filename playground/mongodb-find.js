const {MongoClient, ObjectID} = require("mongodb");//const MongoClient = require("mongodb").MongoClient;

let obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, database) => {

    if(err) {
        return console.log(err);
    }

    const db = database.db('TodoApp');
    db.collection('Todos')
        .find({
            _id: new ObjectID("5b9aa2da3e86e211c4f8e059"),
        })
        .toArray()
        .then((data) => {
            console.log(JSON.stringify(data, undefined, 2));
        })
        .catch((err) => {
            console.log(err);
        });

    database.close();

});