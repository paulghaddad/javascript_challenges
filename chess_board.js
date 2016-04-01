/*
  Write a program that creates a string that represents an 8x8 grid, using newline
  characters to separate lines. At each position of the grid there is either
  a space or "#" character. The characters should form a chessboard:

  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #

  Also, define a variable indicating the size of the grid.
*/

var size = 8;
var board = "";

for (var line = 0; line < size; line++)
{
  for (x = 0; x < size; x++)
  {
    if ((line + x) % 2 == 0)
      board += "#";
    else
      board += " ";
  }

  board += "\n";
}

console.log(board);
