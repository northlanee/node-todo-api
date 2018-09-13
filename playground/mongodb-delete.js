const {MongoClient, ObjectID} = require("mongodb");//const MongoClient = require("mongodb").MongoClient;

let obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, database) => {

    if(err) {
        return console.log(err);
    }

    const db = database.db('TodoApp');
    db.collection('Todos')
        .deleteOne({completed: true})//deleteMany //findOneAndDelete
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });

    database.close();

});