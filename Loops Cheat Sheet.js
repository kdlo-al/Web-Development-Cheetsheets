//Loops Cheat Sheet
/*Things we'll be going over in this Lesson:
1. Looping Manuallly
2. For Loops
3. The While Loop
4. Do...While Statment
5. The Break Keyword */
//Repeaating Task Manuallly
const vacationSpots = ['Hawaii', 'California', 'French polynesia'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);
/*code Above prints:
Hawaii
California
French polynesia */
//For Loop
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}
/*code above prints:
0
1
2
3 */
/*
- The initialization is 'let counter = 0', so the loop will start counting at 0
- The stopping condition is 'counter < 4', meaning the loop will run as long as the iterator variable, counter, is less than 4.
- The iteration statemnet is 'counter++'. This means after each loop, the value of counter will increase by 1. for the first iteration counter will equal 0, for the second iteration counter will equal 1, and so on.
- The code block is inside of the curly braces, 'console.log(counter)', will execute until the condition eveluates to false. */
//Example #2 (looping in reverse):
for (let counter1 = 3; counter1 >= 0; counter1--) {
  console.log(counter1)
};
/*code above prints:
3
2
1
0 */
//example #3 looping through arrays:
const vacationSpots2 = ['Bali', 'Paris', 'Tulum'];
for (let i = 0; i < vacationSpots2.length; i++) {
  console.log(`I would love to visit ${vacationSpots2[i]}`)
};
/*Code Above Prints:
I would love to visit Bali
I would love to visit Paris
I would love to visit Tulum */
//eample #4 Nested loop exapmple:
let bobsFollowers = ['Joe', 'Martha', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Martha', 'Elle'];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};
console.log(mutualFollowers);
/*Code above prints:
['Martha', 'Sam'] */
/*---------------------------------------*/
//The While Loop
//For loops are ideal when we don't know how many times the loop should run. In situation when we want the loop to excute and undetermined number of times, while loops is the best choice.
let count = 1;
while (count < 10) {
  console.log(count);
  count += 2;
}
/*Code above prints:
1
3
5
7
9 */
/*
- The count varaible is declared before the loop;
- We start our loop with the keyword while followed by our stopping condition.
- Next, we have our loop's code block which prints 'count' to the console. */
/*---------------------------------------*/
//Do...While statement
//A Do...While Statement says to do a task once and then keep doing it until a specific condition is no longer met
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
  cupsAdded++
} while (cupsAdded < cupsOfSugarNeeded);
/*---------------------------------------*/
//The Break keyword
//The break keyword allows programs to "break" out of the loop from within the loop's block
const rapperArray = ['lil kim', 'Jay-Z', 'Notorious B.I.G.', 'Tupac'];
for (let i = 0; rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.') {
    break;
  }
} ;
console.log('And if you dont know, now you know');
/*Code above Prints:
lil kim
Jay-Z
Notorious B.I.G.
And if you dont know, now you know */
