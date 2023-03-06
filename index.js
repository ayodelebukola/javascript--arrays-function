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