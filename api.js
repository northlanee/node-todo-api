const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true })
    .then(() => console.log('connected'))
    .catch(err => console.log(err));

let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

let User = mongoose.model('User', {
    login: {
        type: String,
        required: true,
        minlength: 4,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        trim: true
    }
});

let newUser = new User({
    login: "Northlanee",
    password: "1234"
});

newUser.save()
    .then(data => console.log(data))
    .catch(err => console.log(err));

//let newTodo = new Todo({text: "   Fch this shit         "});
//
// newTodo.save()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(err => console.log(err));