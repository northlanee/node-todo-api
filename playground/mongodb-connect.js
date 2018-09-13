const {MongoClient, ObjectID} = require("mongodb");//const MongoClient = require("mongodb").MongoClient;

let obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, database) => {

    if(err) {
        return console.log(err);
    }

    const db = database.db('TodoApp');
    // db.collection('Users').insertOne({
    //
    //     name: 'Vasya',
    //     age: 25,
    //     location: 'Zhytomyr'
    //
    // }, (err, result) => {
    //     if(err) return console.log(err);
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    database.close();

});