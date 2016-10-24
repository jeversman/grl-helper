
var fs = require('fs');
var jsonfile = require('jsonfile');
var readLineSync = require('readline-sync');
var prompt = require('prompt');

const readline = require('readline');
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });

var menu = ["new", "edit"];
var properties = ["name", "age", "color"];
var lastId = 0;

function main() {
  // start();
  test();
}

function test() {
  var str = "";

  prompt.get('name var', function(err, result) {


  });
}

function start() {
  showMenu();
}

function showMenu() {
  for (var i = 0; i < menu.length; i++) {
    console.log((i+1) + ". " + menu[i]);
  }

  prompt.get('select', function(err, result) {
    getSelectedMenuItem(parseInt(result.select));
  });
}

function getSelectedMenuItem(itemNumber) {
  switch (itemNumber) {
    case 1:
      newPerson();
      break;
    case 2:
      console.log("2 typed");
      break;
    default:
      console.log("unk");
      break;
  }
}

function newPerson() {
  var id = getNextId();
  var newPerson = {id: id};
}

function setNewPersonProperty(propertyName) {
  prompt.get('input ' + propertyName, function(err, result) {

  });
}


function  initProperties() {

}

var arr = [];
function start1() {
	prompt.start();
	getAnother();
}

function getProperty(propertyStr) {
  prompt.get(propertyStr, function(err, result) {
      return result;
  });
}




function testReadJson() {
  jsonfile.readFile("./test.json", function(err, obj) {
    console.dir(obj);
  });
}

function foo() {
	var result = [];
	var currId = 1;

	while (currId < 3) {
		var name = readLineSync.question('Input name: \n');
		result.push({id: currId, name: name});
		currId++;
	}

	var jsonString = JSON.stringify(result);
	writeJSON(JSON.parse(jsonString));
}

function writeJSON(obj) {
	jsonfile.writeFile('test.json', obj, function (err) {
		console.error(err);
	});
}

function getNextId() {
  lastId++;
  return lastId;
}





main();
