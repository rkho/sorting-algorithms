var insertionSort = function(array, callback) {
  // Iterate over our array
  for (var i = 0; i < array.length; i++) {
    // Grab the element, value, and index
    var element = array[i];
    var value = element.value;
    var index = i;

    // While our index is a whole number and our value is less than the previous index's value
    while (index && value < array[index - 1].value) {
      array[index] = array[index - 1];
      index--;
    }

    array[index] = element;
  }

  return array;
}
