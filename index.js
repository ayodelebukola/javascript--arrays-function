//QUESTION 1
//Mutating methods are ones that change  the object after the method has been used.
//Non-mutating methods do not change the object after the method has been used.

//Mutating methods are those that modify the array they are called on. such that  if you call a mutating array method, the array will be changed. 
//These methods add or remove elements from the array or modify thr=e existing elements.

//Non-mutating methods are those that don't modify the array they are called on. such that if you call a non-mutating array method, 
//the original array will remain unchanged. these methods create a new array from the elements of the original array but do not modify the original array.

//Mutating array methods tend to be faster than non-mutating array methods as they don't need to create a new array.

//Mutating array methods are faster than non-mutating methods but require more caution when used. Non-mutating are slower but easier to debug and understand.

//Examples of mutating array methods are: 
//Array.pop()
//Array.push()
//Array.shift()
//Array.unshift()
//Array.reverse()
//Array.sort()
//Array.splice()

//Examples of non-mutating array methods:
//Array.slice()
//Array.concat()
//Array.map()
//array.filter()

//QUESTION 2

let languages = ['c#', 'Javascript', 'Ruby', 'PHP', 'Python'];
console.log (languages);

//Add 'Kotlin' to the end of the array.
languages.push('Kotlin');
console.log(languages);


//Add 'Java' after 'Ruby'.
languages.splice (3, 0, 'Java');
console.log(languages);


//Remove the first item in the array.
languages.shift();
console.log(languages);


//Add 'Scala' and 'Swift' to the beginning of the array.
languages.unshift('Scala', 'Swift');
console.log(languages);


//Replace 'PHP' with 'Go' and 'Rust'.
languages.splice(5, 1, 'Go', 'Rust');
console.log(languages);



//QUESTION 3.

let fruit = ['apple', 'mango', 'banana'];
function changeFruit(fruit) {
    fruit[2] = "orange";
    return fruit;
}
console.log(changeFruit);

//Answer is banana

//QUESTION 4.

const highestNumber = [4, 5, 10, -2];
console.log (Math.max (...highestNumber));



//QUESTION 5.
const valTimesIndex = [1, 2, 3];

function valTimesIndex(arr){
    return arr.map(function(value,index,array){
      return value*index;
  });   
}
console.log(valTimesIndex);