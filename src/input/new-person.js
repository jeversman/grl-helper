var printer = require('./printer.js');
var personControllerModule = require('./person-controller.js');
var promptHelperModule = require('./prompt-helper.js');

function startCreatingNewPerson(id, cb) {
  printer.printTitle("NEW PERSON");

  var person = {id: id};
  
  var msg = "name";
  var getValue = function (value) {
      person[msg] = value;
      printer.showMsg("person created");

      cb(person);
  }

  promptHelperModule.wait(msg, getValue);
}
exports.startCreatingNewPerson = startCreatingNewPerson;

// function setPersonProperty(propertyIndex, newPersonJSONObj) {
//   if (properties[propertyIndex] != null) {
//
//     showListWithProperty(propertyIndex);
//
//     var propertyName = properties[propertyIndex];
//     prompt.get(propertyName, function(err, result) {
//       newPersonJSONObj[propertyName] = result[propertyName];
//       setPersonProperty(propertyIndex + 1, newPersonJSONObj);
//     });
//   }
//   else {
//     persons.push(newPersonJSONObj);
//     console.log("person added");
//     showMenu();
//   }
// }


var PROPERTIES = [
  {
    "interior": [
      {
        "mind": 1
      },
      {
        "flair": 1
      }
    ]
  },
  {
    "external": [
      {
        "throw": [
          {
            "accuracy": 1
          },
          {
            "distance": 1
          }
        ]
      },
      {
        "speed": 1
      }
    ]
  }
];













