var prompt = require('prompt');

var COMMANDS = {
  "new": function () {
    newPerson();
  },
  "list": function () {
    showList();
  },
  "delete": function () {
    deletePerson();
  },
  "exit": function () {
    exit();
  }
};

main();

function main() {
  waitCommand('enter command');
}


function waitCommand(msg) {
  prompt.get(msg, function(err, result) {
    runCommand(result[msg]);
  });
}

function runCommand(command) {
  COMMANDS[command]();
}

function newPerson() {
  console.log("creating new person");
}

function showList() {
  console.log("show list of persons");
}

function deletePerson() {
  console.log("deleting person");
}

function exit() {
  console.log("exit exit");
}
