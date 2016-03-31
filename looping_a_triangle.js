/*
 * Write a loop that makes seven calls to console.log to output the following
 * triangle:
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
*/

// Solution 1

var levels = 7;

for (var i = 1; i <= levels; i++)
  console.log("#".repeat(i));

// Solution 2

var levels = 7;
var block = "#"

for (var i = 1; i <= levels; i++)
  console.log(block += "#");
