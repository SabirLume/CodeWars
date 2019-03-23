                                    
                                            **Simple Multiplcation**
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

My Experience:



                                                **Count by X**
Create a function with two arguments that will return a list of length (n) with multiples of (x).
Assume both the given number and the number of times to count will be positive numbers greater than 0.
Return the results as an array (or list in Python, Haskell or Elixir).
Examples:
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
Testing Result with: Testing for result with count_by(13, 8)

My Experience: I had difficulties figuring out what I needed to multiply in order for me to get the x argument


                                                **String Repeat**
Write a function called repeatStr which repeats the given 
string string exactly n times.
repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

My Experience: I had difficulties understanding how to make the string repeat iself. Realized multiplying a number by a string will only get you 'NaN' because multiplying in JS only works with integers

                                        **Convert a String Into a Number**
                                        
We need a function that can transform a string into a number. What ways of achieving this do you know?


My Experience: I had to find a method to convert the string into numbers (parseInt).

                                        **Keep Up the Hoop**
Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".

If he doesn't get 10 hoops, return the string "Keep at it until you get it".       

My Experience: I found this challenge fairly easy. I did run into some syntax problem when making my conditional. Something I need to work on. I put a itteration when I did not need one.

                                         **Beginner Series #4 Cockroach**
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

cockroachSpeed(1.08) == 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

My Experience: This problem took more longer to do because I forgot to return the result so the function will be able to show a result

                                        ** Switch it up **
When provided with a number between 0-9, return it in words.
Input :: 1
Output :: "One".
Try using "Switch" statements.

My Experience: I had to look up how to use switch statements. Was not diffficult to do.

                                        **Is he gunna survive?**
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)

My Experience: I had an idea of how to solve the problem it took a couple of tries with the parameters and using less than operators to figure this problem out.

                                    **Ones and Zeros**
Given an array of one's and zero's convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11

My Experience: During this codewars I learned how to reverse an array with .reverse() also how to use exponents using Math.pow().


                                    ***Beginner But Grow***
                                    

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

My Experience: I had trouble understanding the problem. I need to go back to this problem and practice.

                                    ***Sort By String Length***
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

My Experience: 
I had trouble using the sort method and trying to figure out how to accomplish this code wars.

                                         ***IQ Test***
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

Examples :

Test.assertEquals(iqTest("2 4 7 8 10"),3);
Test.assertEquals(iqTest("1 2 2"), 1);

My Experience: 

For this coding challenge it took me a while to do. I did not realize that the given parameters was a string and not a array of numbers. I learned how to use .split(' ') in order to separate everything in the string that was being entered.

My first answer was wrong. I misunderstood the question for the problem. The problem was asking for the "odd" number out of the array of numbers. Meaning the one number that is not even out of the list of ODD numbers OR the number that is NOT odd out of a list of even numbers.

                                            ***Regex Validate Pin Code***
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

eg:

validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false

My Experience: I knew what I had to do, but it took a while to get to the solution. I had to return false for NaN. I also had to return false for things like whitespace because that is considered and value of 0 in Js.

                                            ***Growth of a Population***
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note: Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

My Experience: I had difficulty translating my algebraic formula into a function that JS could run.

                                            ***Summing a number's digits***
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

  sumDigits(10);  // Returns 1
  sumDigits(99);  // Returns 18
  sumDigits(-32); // Returns 5
Let's assume that all numbers in the input will be integer values.

My Experience:  I knew the logic behind how to figure out this project but I had problems without how to add numbers once I made the numbers into strings in order for me to try to add them.