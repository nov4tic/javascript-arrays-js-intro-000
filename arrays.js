var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var moreChocolateBars = [element, ...array]
  return moreChocolateBars
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
