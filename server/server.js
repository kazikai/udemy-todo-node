const mongoose = require('mongoose');
const {mongoHost} = require('../playground/local');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${mongoHost}/TodoApp`);

console.log( mongoHost );

/*
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
*/
const Todo = mongoose.model('Todo', {
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

/*
const newTodo = new Todo({
  text: 'Study Node.js'
});
newTodo.save().then((doc) => {
  console.log('Save todo', doc)
}, (e) =>{
  console.log('Unable to save todo');
});
*/

const otherTodo = new Todo({
  text: 'Edit this video'
});
otherTodo.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save other todo', e);
});

//User
//email - required it , trim, type, minlength 1

const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

const user = new User({
  email: 'kazikai84@gmail.com'
});

user.save().then((doc) => {
  console.log('User save', doc);
}, (e) => {
  console.log('Unable save user',e);
});