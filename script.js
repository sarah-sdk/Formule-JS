// Given an array of names of people but mixing lower case and upper case letters, you will have to:
// - Create a function that contains the logic to refactor those names so it converts a name like `anTHoNY` to `Anthony`.
// - A function that accepts two parameters: an array and a callback function that is in charge of refactoring all items inside that array
// - Return the original array but with all names properly typed

const people = ['JoHn', 'ChrISTiana', 'anThoNY', 'MARia', 'jaMeS', 'MIChaEl', 'jeNNIFeR'];

function fixCase(a) {
    return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
  }

function applyTransformation (array, callback){
    for (let i = 0; i < array.length; i++){
      array[i] = callback(array[i]);
    }
    return array;
}

console.log(applyTransformation(people, fixCase));
