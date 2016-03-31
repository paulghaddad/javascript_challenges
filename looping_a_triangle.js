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

var triangleLayers = 7;

for (var layer = "#"; layer.length <= triangleLayers; layer += "#")
  console.log(layer);
