
var persons = [];

function addPerson(person) {
  persons.push(person);
}

function getPersons() {
  return persons;
}

exports.getPersons = getPersons;
exports.addPerson = addPerson;
