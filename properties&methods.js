// javascript properties 
'use strict'; //

let a = 'This is a javascript property';
// String Size of the variable 
document.body.innerHTML= a.length

// Shows the start index of the particular word
document.body.innerHTML= a.indexOf('i');
document.body.innerHTML= a.indexOf('is');
document.body.innerHTML= a.indexOf('s');

// Shows a portion of sentance of the variable
document.body.innerHTML= a.substring(2,3);

// Replace a word with another word
document.body.innerHTML= a.replace('javascript','java');

// Capitalize all words including all characters 
document.body.innerHTML= a.toUpperCase();

// Reverse the string
let words = ['a', 'b', 'c', 'd', 'e', 'f'];
document.body.innerHTML= words.reverse();
// Console can show all the function that can be used with js array.
console.log(words);
// Convert to string
let b = [1,2,3,4,5,6,7,8,9];
document.body.innerHTML= b.toString();

// Joining the array together and returning the string we can use how to join what to use in between the words   
let c = [1,2,3,4,5,6,7,8,9];
document.body.innerHTML= c.join(' ');
document.body.innerHTML= c.join('-');

// Removing one element from the array and returning the removed element 

//return the last elemtnt from the array permanently
document.body.innerHTML = c.pop()
document.body.innerHTML = c;
                     
// Inserting an element into the array

document.body.innerHTML = c.push(9);
document.body.innerHTML = c;



