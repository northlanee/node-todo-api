const {MongoClient, ObjectID} = require("mongodb");//const MongoClient = require("mongodb").MongoClient;

let obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, database) => {

    if(err) {
        return console.log(err);
    }

    const db = database.db('TodoApp');
    db.collection('Todos')
        .findOneAndUpdate(
        {_id: ObjectID("5b9ac72793dffe71e87f5a8d")},
        {
            $set: {
                text: "Wash cat"
            }
        },
        { returnOriginal: false })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });

    database.close();

});