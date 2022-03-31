//Array Methods Cheat Sheet
/*Things we'll be going over in this lesson:
1. The .push() Method
2. The .pop() Method
3. The .shift() Method
4. The .unshift() Method
5. The .slice() Method
6. The .indexOf() Method */
//The Push() Method: Allows us to add items to the end of an Array
const itemTracker = ['item0', 'item1', 'item2',];
itemTracker.push('item3', 'item4');
console.log(itemTracker);
/*Code above prints:
['item0', 'item1', 'item2', 'item3', 'item4'] */
/*-----------------------------------------*/
//The .pop() Method: Removes the last item of an Array
const newItemTracker = ['item0', 'item1', 'item2'];
const removed = newItemTracker.pop();
console.log(newItemTracker);
/*Code above prints:
['item0' 'item1'] */
console.log(removed);
/*Code above prints:
item2 */
/*-----------------------------------------*/
//The .shift() Method: removes first item from the Array
const groceryList = ['orange juice', 'bananas', 'coffee', 'beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
console.log(groceryList);
/*Code above prints:
[
'bananas',
'coffee',
'beans',
'brown rice',
'pasta',
'coconut oil',
'plantains'
] */
/*-----------------------------------------*/
//The .unshift Method: adds one or more item to the beginning of the array
//We'll be using the 'groceryList' array on line 20
groceryList.unshift('popcorn');
console.log(groceryList);
/*Code above prints:
[
  'popcorn',
  'bananas',
  'coffee',
  'beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains'
] */
/*-----------------------------------------*/
//The .slice() Method: Method returns a shallow copy of a portion of an array into a new array object selected from begin to end. The original array will not be modified.
//We'll be using the 'groceryList' array on line 20
console.log(groceryList.slice(1, 4));
/*Code above prints:
['bananas', 'coffee', 'beans'] */
/*-----------------------------------------*/
//The .indexOf() Method:  method returns the first index at which a given element can be found in the array, or -1 if it is not present
//We'll be using the 'groceryList' array on line 20
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);
/*Code above returns:
5 */
