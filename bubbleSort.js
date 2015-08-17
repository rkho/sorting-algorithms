var swap = function(i, j, array) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
}


var bubbleSort = function(array) {

  // Iterate over the array

  for (var i = 0; i < array.length; i++) {
    // Have we swapped yet?
    var swapped = false;

    for (var j = 0; j < (array.length - 1 - i); j++) {
      if (array[j] > array[j + 1]) {
        swapped = true;
        swap(j, j + 1, array);
      }
    }

    if (!swapped) {
      break;
    }
  }

  return array;
};
