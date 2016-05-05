/* Write a function arrayToList that builds up a data structure like the
 * previous one when given [1, 2, 3] as an argument, and write a listToArray
 * function that produces an array from a list. Also write the helper functions
 * prepend, which takes an element and a list and creates a new list that addes
 * the element to the front of the input list, and nth, which takes a list and a
 * number and returns the element at the given position in the list, or
 * undefined when there is no such element. If you haven't already, also write a
 * recursive version of nth.
 */

function arrayToList(values) {
  var list = null;

  for (var i = values.length - 1; i >= 0; i--)
    list = { value: values[i], rest: list };

  return list;
}

function listToArray(list) {
  var array = [];

  for (var node = list; list; list = list.rest)
    array.push(node.value);

  return array;
}

function prepend(element, list) {
  return { value: element, rest: list }; 
}

function nth(list, number) {
  if ( list == null )
    return undefined;
  else if ( number == 0 )
    return list.value;
  else
    return nth(list.rest, number - 1);
}
