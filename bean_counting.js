function countBs(string) {
  return countChar(string, 'B');
}

function countChar(string, searchChar) {
  var counted = 0;

  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == searchChar)
      counted++;

  return counted;
}
