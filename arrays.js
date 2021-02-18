var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(element, array){
  var moreChocolateBars = [element + ...chocolateBars];
  return moreChocolateBars;
}
addElementToBeginningOfArray();

function destructivelyAddElementToBeginningOfArray(array, element){}
