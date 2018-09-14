const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true })
    .then(() => console.log('connected'))
    .catch(err => console.log(err));

let Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

let newTodo = new Todo({
    text: "Wash fish"
});

newTodo.save()
    .then((data) => {
        console.log(data);
    })
    .catch(err => console.log(err));