var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element){
  var moreChocolateBars = [element, ...chocolateBars];
  return moreChocolateBars;
}
addElementToBeginningOfArray();

function destructivelyAddElementToBeginningOfArray(array, element){}
