const app = require('express').Router();
const db = require('../db');

module.exports = app;


app.get('/', (req, res, next)=> {
  res.render('people', { title: 'People', people: db.getPeople() });
});

app.get('/:id', (req, res, next)=> {
  const person = db.getPerson(req.params.id);
  res.render('person', { title: `Person: ${person.name}`, person });
});
