/*-indexof()
-includes()
-repeat()
-replace()
-slice()
-split()
-tolowercase()
-tostring()
-touppercase()
-trim()
-endswith()*/

/*--------------------------------------*/

const script = ['George', 'Adam', 'Claudia', 'Davis', 'Ryan', 'Lisa']
const scriptIndex = script.indexOf('Ryan');
console.log(scriptIndex);

//Returns 4
/*--------------------------------------*/
//includes(): (place definition here)
//example number 1:
console.log(script.includes('Thomas'));
console.log(script.includes('Nick'));
//example number 2:
const scriptIncludes = script.includes('George');
console.log(scriptIncludes);
//example number 3:
if (script.includes('Dick')) {
    console.log('Dick is in the list');
} else {
    console.log('Dick is not the List');
};
/*--------------------------------------*/
//repeat(): (Place definition here)
//example number 1:
const birthdaySong = 'Happy Birthday to you ';
console.log(`${birthdaySong.repeat(4)} Happy Birthday dear Nick ${birthdaySong.repeat(1)}`);
//example number 2:
console.log(birthdaySong.repeat(0)); // result comes out empty string.
console.log(birthdaySong.repeat(1)); // result comes out 'Happy Birthday to you';
/*--------------------------------------*/
//replace(): (Place definition here)
//example number 1:
const script1 = 'Hand this letter to Elizabeth';
const scriptReplace = script1.replace('Elizabeth', 'Bill');
console.log(scriptReplace);
//example number 2:
const script2 = 'I went for a swim early this morning. I might head off for another swim later tonight.';
const scriptSwim = /swim/g;
const scriptReplace2 = script2.replace(scriptSwim, 'run');
console.log(scriptReplace2);
/*--------------------------------------*/
//slice(): (Place definition here)
//example number 1: 
const script3 = ['Soccer', 'Basketball', 'Football', 'Golf', 'Cross Country', 'Lacross', 'Tennis'];
console.log(script3.slice(3));
console.log(script3.slice(3,5));
console.log(script3.slice(0,1));
/*--------------------------------------*/
//Split(): (Place definition here)
//example number 1:
const string4 = 'Enjoy your trip in italy';
console.log(string4.split(' '));
/*--------------------------------------*/
//tostring(): (Turns a number into a string)
//example number 1:
const value1 = 15;
const value2 = 20;
const valuePlusValue = value1 + value2;
const valuePlusString = value1 + value2.toString();
console.log(valuePlusValue);
console.log(valuePlusString);
/*--------------------------------------*/
//trim(): (Deletes the white space between the around a string)
//example number 1:
const bloodSport = '  brick not hit back  ';
console.log(bloodSport);
console.log(bloodSport.trim());
/*--------------------------------------*/
//toUpperCase(): (Returns a capitalized string) 
//toLowerCase(): (Returns a lower cased string)
//example number 1:
const string5 = 'Hello!';
console.log(string5.toUpperCase());

const stringCapitalized = 'HELLO!';
console.log(stringCapitalized.toLowerCase());
/*--------------------------------------*/