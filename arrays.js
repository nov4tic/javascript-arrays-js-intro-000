var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray() {
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return chocolateBars.unshift(element);
}
destructivelyAddElementToBeginningOfArray([0], 'hershey')
