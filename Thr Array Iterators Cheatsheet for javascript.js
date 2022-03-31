/*--The Array Iterators Cheatsheet for Javscript--*/
/* Things we'll be going over in this lesson:
1. ForEach() iterator
2. Array.Map() iterator
3. Array.filter() iterator
4. Array.findIndex() iterator
5. Array.reduce() iterator
6. Array.every() iterator
7. Array.some() iterator */
/*--------------------------------------------*/
//forEach() iterators: This Method Executes a snippet of code (or a function) once for every element of an array; this is often used as a replacemnet for standard for loops
const superHeroArray = ['Iron Man', 'Captain America', 'Black Widow', 'Thor', 'Hulk', 'Hawkeye',];

superHeroArray.forEach((superHeroArray) => {
  console.log(`The best super hero is ${superHeroArray}`);
});
/*code above returns:
The best super hero is Iron Man
The best super hero is Captain America
The best super hero is Balck Widow
The best super hero is Thor
The best super hero is Hulk
The best super hero is Hawkeye*/
/*--------------------------------------------*/
//Array.map() iterator: returns a new Array with the updated elements after calling a callback function on every element in the array
const animals = ['hen', 'elephant', 'llama', 'leopard', 'ostrich', 'whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animals => { return animals[0] });
console.log(secretMessage);
/*code above returns:
h e l l o w o r l d */
//example #2:
const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(bigNumbers => { return bigNumbers / 100 });
console.log(smallNumbers);
/*code above returns:
[1 2 3 4 5] */
//example #3
const superheroesArray = ['Iron Man', 'Captain America', 'Black Widow', 'Thor', 'Hulk', 'Hawkeye',];

const avengers = superheroesArray.map((superheroesArray) => { return superheroesArray += ' avenger' });
console.log(avengers);
/*code above returns:
'Iron Man avenger'
'Captain America avenger'
'Black Widow avenger'
'Thor avenger'
'Hulk avenger'
'Hawkeye avenger' */
/*--------------------------------------------*/
//Array.filter() iterator: This Method checks each elemnet in an array to see if it meets a condition. It returns a new array with the elements that meets the condition
const superherosArray = ['Iron Man', 'Captain America', 'Black Widow', 'Thor', 'Hulk', 'Hawkeye',];

const shortNamesAvenger = superherosArray.filter((superherosArray) => superherosArray.length < 5);
console.log(shortNamesAvenger);
/*code above returns:
'Thor' 'Hulk' */
//example #2
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers3 = randomNumbers.filter(randomNumbers => { return randomNumbers < 250 });
console.log(smallNumbers3);
/*code above returns:
[200, 3.14, 7, 13] */
/*--------------------------------------------*/
//Array.find() iterator:
/*--------------------------------------------*/
//Array.findindex() iterator: will return the index of the first elemnet which evaluates to true for the condition
const animals2 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals2.findIndex(animals2 => { return animals2 === 'elephant' });
const startWithS = animals2.findIndex(animals2 => { return animals2[0] === 's' });
console.log(foundAnimal);
console.log(startWithS);
/*code above returns:
7
3 */
/*--------------------------------------------*/
//Array.reduce() iterator: Used to reduce the array to single value. It executes a provided function for each value of the array(left to right). The return value of the function is stored in anaccumulator.
const superheroArr = ['Iron Man', 'Captain America', 'Black Widow', 'Thor', 'Hulk', 'Hawkeye',];

const allAvengers = superheroArr.reduce((all, hero) => all += ' ' + hero);
console.log(allAvengers);
/*code above returns:
Iron Man Captain America Black Widow Thor Hulk Hawkeye */
/*--------------------------------------------*/
//Array.every() iterator: The every method test if all elemnets in the array pass a condition. The return value is a boolean
const superheroArr2 = ['Iron Man', 'Captain America', 'Black Widow', 'Thor', 'Hulk', 'Hawkeye',];

const isAllStr = superheroArr2.every(
  (hero) => typeof hero === 'string'
);
console.log(isAllStr);
/*code Above retruns:
True */
/*--------------------------------------------*/
//Array.some(): The some Method test if some of the elements in the array pass a condition. It will return true if any of the one values meets the condition. The return value is boolean.
const superheroArr123 = ['Iron Man', 'Captain America', 'Black Widow', 'Thor', 'Hulk', 'Hawkeye', 1];

const isSomeNbr = superheroArr123.some((hero1) => typeof hero1 === 'number');
console.log(isSomeNbr);
/*code above returns:
True */
