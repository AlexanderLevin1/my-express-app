const people = [
  { id: 1, name: 'Moe' },
  { id: 2, name: 'Larry' },
  { id: 3, name: 'Curly' },
];

const getPeople = ()=> {
  return people;
};

const getPerson = (id)=> {
  return people.find( person => person.id === id*1);
}

module.exports = {
  getPeople,
  getPerson
};
