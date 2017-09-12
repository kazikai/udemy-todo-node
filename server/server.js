const mongoose = require('mongoose');
const {mongoHost} = require('../playground/local');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${mongoHost}/TodoApp`);

console.log( mongoHost );


const Todo = mongoose.model('Todo', {
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

const newTodo = new Todo({
  text: 'Study Node.js'
});

newTodo.save().then((doc) => {
  console.log('Save todo', doc)
}, (e) =>{
  console.log('Unable to save todo');
});

const otherTodo = new Todo({
  text: 'Study React.js',
  completed: false,
  completedAt: 123
});
otherTodo.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save other todo');
});
