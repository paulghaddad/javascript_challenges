/*
 Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz"; for numbers divisible by 5, print "Buzz". When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5.
*/

for (var number = 1; number <= 100; number++)
{
  string = "";

  if (number % 3 == 0)
    string += "Fizz";
  if (number % 5 == 0)
    string += "Buzz";

  console.log(string || number);
}
