var merge = function(leftArr, rightArr) {
  var result = [];
  // Store the 'remaining item'
  var itemToCheck;

  // Grab the first item from both arrays
  leftIndex = 0;
  rightIndex = 0;

  // While either array is valid
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex++]);
    } else {
      result.push (rightArr[rightIndex++]);
    }
  }

  return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

var mergeSort = function(array) {
  // If our array's length is exactly 1, merge.
  if (array.length < 2) {
    return array;
  }

  var middle = Math.floor(array.length/2);
  var left = array.slice(0, middle);
  var right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};
