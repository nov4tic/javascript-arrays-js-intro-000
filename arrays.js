var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element) {
  var moreChocolateBars = [element, ...chocolateBars];
  return moreChocolateBars;
}

function destructivelyAddElementToBeginningOfArray(array, element){}
