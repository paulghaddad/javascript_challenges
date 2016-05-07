/*The == operator compares objects by identity. But sometimes, you would prefer to
compare the values of their actual properties. Write a function, deepEqual, that
takes two values and returns true only if they are the same value or are objects
with the same properties whose values are also equal when compared with a
recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator for
that) or by looking at their properties, you can use the typeof operator. If it
produces "object" for both values, you should do a deep comparison. But you have
to take one silly exception into account: by a historical accident, typeof null
also produces "object". */

function deepEqual(object1, object2) {
  for (var property in object1)
  {
    if (bothAreObjects(object1[property], object2[property]))
      return deepEqual(object1[property], object2[property]);
    else
      return equalProperties(object1[property], object2[property]);
  }
}

function equalProperties(property1, property2) {
  if (property1 === property2)
    return true;
  else
    return false;
}

function objectsNotNull(object1, object2) {
  return (object1 != null && object2 != null);
}

function bothAreObjects(object1, object2)
{
  return (typeof(object1) == "object" && typeof(object2) == "object" && objectsNotNull(object1, object2));
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true
