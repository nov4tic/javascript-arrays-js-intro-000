var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var moreChocolateBars = [element, ...array]
  return moreChocolateBars
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var moreChocolateBars = [...array, element];
  return moreChocolateBars;
}

var destructivelyAddElementToEndOfArray = (array, element) => {
  array.push(element);
  return array;
}

var accessElementInArray = (array, index) => {
  return array[index];
}

var destructivelyRemoveElementFromBeginningOfArray = array => {
  array.shift();
  return array;
}

var removeElementFromBeginningOfArray = array => let newArr = array.slice(1);
