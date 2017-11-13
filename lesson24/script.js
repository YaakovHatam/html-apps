// Change DOM - in 'Developers tools' you can see the change, in 'view source' you can see the original value of button id='send'
document.getElementById('send').innerHTML = 'change';


// Object to JSON and back
var myObj = {
    key1: 'value1',
    key2: 'value2'
}

var objectToJson = JSON.stringify(myObj);

console.log(objectToJson);

var jsonToObject = JSON.parse(objectToJson);

console.log(jsonToObject);
// end Object to JSON and back


// Regex
// use the website https://regexr.com/ to test your expressions
var regexExp = /^[A-Z][A-Za-z]{2,4}/g;
var myArray = regexExp.exec('David Moshe Somename');