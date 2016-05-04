/* Arrays have a method reverse, which changes the array by inverting the order
 * in which its elements appear. For this exercise, write two functions,
 * reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array
 * as an argument and produces a new array that has the samme elements in the
 * inverse order. The second, reverseArrayInPlace, does what the reverse method
 * does: it modifies the array given as argument in order to reverse its
 * elements. Neither may use the standard reverse method.
 *
 * Thinking back to the notes about side effects and pure functions in the
 * previous chapter, which variant do you expect to be useful in more
 * situations? WHich one is more efficient?
 */

function reverseArray(array) {
  reversedArray = [];

  for (var i = 0; i < array.length; i++)
    reversedArray.unshift(array[i]);

  return reversedArray;
}

function reverseArrayInPlace(array) {
  var arrayLength = array.length;

  for (var i = 0; i < Math.floor(arrayLength / 2); i++)
  {
    var endIndex = arrayLength - i - 1;
    var startValue = array[i];

    array[i] = array[endIndex];
    array[endIndex] = startValue;
  }

  return array
}

/* The first function is more useful in most situations. Returning a copy of the
 * reversed array is a pure function with no side effects. It is also more
 * efficient. The reverseArrayInPlace function requires an extra operation to
 * store the temporary variable.
 */
