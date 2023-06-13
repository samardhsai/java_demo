// Question 1
function isEven(num) {
    if(num%2 == 0)
        return true;
    else
        return false;
}

console.log(isEven(7));

// Question 2
const student = [{
    name: "sjisjiij",
    age: 23
},
{
    name: "kvidjig",
    age: 23
},
{
    name: "eryuoask",
    age: 23
}]

for(var i=0; i<student.length; i++) {
    console.log(student[i].name);
}

// Question 3
const student1 = [{
    name: "sjisjiij",
    email: "abcdf@gmail.com"
},
{
    name: "kvidjig",
    email: "dusjmkv@gmail.com"
},
{
    name: "john",
    email: "john123@gmail.com"
}]

function findEmailByName(student1, name) {
    for(let i=0;i<student1.length;i++) {
        if(student1[i].name === name)
            return student1[i].email;
        }
}

const output = findEmailByName(student1, "john");
console.log(output);

// Question 4
 function isPositive(num) {
    if(num>0)
        return true;
    else
        return false;
 }

 console.log(isPositive(-2));

//  Question 5
const grade = 85;
if(grade>=60) {
    console.log("Pass");
}
else
    console.log("Fail");

// Question 6

function isPalindrome(word) {
    var reverseWord = word.split('').reverse().join('');
    return word === reverseWord
}

var result = isPalindrome("racecar");
console.log(result);

// Question 7

const arr = [1,2,3,4,5];
var sum = 0;
for(let i=0;i<arr.length;i++) {
     sum = sum + arr[i];
}

console.log(sum)

// Question 8

const name1 = "Alice";
if(name1 == "Alice") {
    console.log("Hello Alice!");
}
else 
    console.log("Hello Stranger!");

// Question 9

const books = [{
    author: "jsigjsskmv",
    title: "jvidjvivkxl"
}, 
{
    author: "adbgjdeov",
    title: "qefkglososkc"
},
{
    author: "abcdefgh",
    title: "The Great Gatsby"
}]

function findAuthorByTitle (books, title) {
    for(let i=0;i<books.length;i++) {
        if(books[i].title === title)
            return books[i].author;
    }
}

const output1 = findAuthorByTitle(books, "The Great Gatsby");
console.log(output1);

// Question 10 

function calculateArea(length,  width) {
    let area = 0;
    area = length * width;
    return area;
}

const output3 = calculateArea(4, 5);
console.log(output3);

// Question 11

function primeNum(n) {
    for(var i=2; i<=n; i++) {
        if(isPrime(i))
            console.log(i);
    }
}

function isPrime(num) {
    if (num <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
}

primeNum(20);
