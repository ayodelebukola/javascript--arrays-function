//QUESTION 2

let languages = ['c#', 'Javascript', 'Ruby', 'PHP', 'Python'];
console.log (languages);


languages.push('Kotlin');
console.log(languages);

languages.splice (3, 0, 'Java');
console.log(languages);

languages.shift();
console.log(languages);

languages.unshift('Scala', 'Swift');
console.log(languages);

languages.splice(5, 1, 'Go', 'Rust');
console.log(languages);