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
    const len = word.length;
    for(var i=0; i<len/2; i++) {
        if(word[i] != word[len-1-i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("racecar"));

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

// JS Assignment 2
// Question 1

const arr1 = ["afgthge", "dirogdo", "vnidjkdos", "jdidjjvo"];
arr1.push("asfffkg");
console.log(arr1);

// Question 2

arr1.pop();
console.log(arr1);

// Question 3
const arr2 = ["afgthge", "dirogdo", "vnidjkdos", "jdidjjvo"];
const arr3 = ["djfijf", "qwoejfjo"];
const result = arr2.concat(arr3);
console.log(result);

// Question 4

const result1 = arr1.indexOf("vnidjkdos");
console.log(result1);

// Question 5
const result2 = arr1.slice(1, 3);
console.log(result2);

// Question 6

let text = "Dkijivgo Aokoskgo";
let text1 = text.toUpperCase();
console.log(text1);
let text2 = text.toLowerCase();
console.log(text2);
let text3 = text.split(" ");
console.log(text3);
let text4 = text.charAt(5);
console.log(text4);
let text5 = text.substring(4, 8);
console.log(text5);

function doubleArray(arr) {
    const double = arr.map((element) => element *2);
    return double;
}

const arr4 = [2, 4, 10, 18];
const double = doubleArray(arr4);
console.log(double);

function removeEvenNumbers(arr) {
    const oddNumbers = arr.filter((element) => element % 2 != 0);
    return oddNumbers;
  }

  const arr5 = [1, 2, 3, 4, 5];
  const odd = removeEvenNumbers(arr5);
  console.log(odd);

  function logArray(arr) {
    arr.forEach((element) => console.log(element));
  }

  const arr6 = [1,2,3,9,8,7];
  console.log(logArray(arr6));

// Algorithms

function reverse(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str.charAt(i);
    }
    return reversed;
  }

  const input = "digjdihfijijif";
const reversed = reverse(input);
console.log(reversed);

function reverseBuildIn(str) {
    return str.split('').reverse().join('');
  }

  const input1 = "digjdihfijijif";
const reversed1 = reverse(input1);
console.log(reversed1);

function findMaxNumber(arr) {
    let maxNumber = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxNumber) {
        maxNumber = arr[i];
      }
    }
    return maxNumber;
  }

  const numbers = [4, 14, 18, 9, 11, 1];
const maxNumber = findMaxNumber(numbers);
console.log(maxNumber);

function removeDuplicates(arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArray.includes(arr[i])) {
        uniqueArray.push(arr[i]);
      }
    }
    return uniqueArray;
  }

  const numbers1 = [1, 2, 3, 4, 2, 1, 3, 5];
const uniqueNumbers = removeDuplicates(numbers1);
console.log(uniqueNumbers);

function sortedArray(arr) {
    for(i=0;i<arr.length;i++) {
        for(j=i+1;j<arr.length;i++) {
            if(arr[i]>arr[j])
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
        }
    }
    return arr;
}


const number2 = [3,5,4,1,2];
const sorted = sortedArray(number2);
console.log(sorted);

