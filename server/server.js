const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');


const app = express();
let port = 3000;

app.use(bodyParser.json()) ;

app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {

});

//GET /todos/


app.listen(port, () => {
  console.log(`Starting on port ${port}`);
});













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

/*
const newTodo = new Todo({
  text: 'Study Node.js'
});
newTodo.save().then((doc) => {
  console.log('Save todo', doc)
}, (e) =>{
  console.log('Unable to save todo');
});

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

const user = new User({
  email: 'kazikai84@gmail.com'
});

user.save().then((doc) => {
  console.log('User save', doc);
}, (e) => {
  console.log('Unable save user',e);
});
*/
