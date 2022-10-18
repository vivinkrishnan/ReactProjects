

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.

console.log(numbers);

// Map

const arr1 = numbers.map((x) => 
    x + 10
);

console.log(arr1);


const addTen = (x) =>{
    return x+10;
}

const arr2 = numbers.map(addTen);

console.log(arr2);

//Reduce
let total = 0;
const sum = numbers.reduce((total,x) => 
     total + x
,0);

console.log(sum);

//Filter

const arr3 = numbers.filter((x) => 
    x > 10
);

console.log(arr3);



//Find
const num = numbers.find((x) => 
    x === 3
);

console.log(num);

//FindIndex
const index = numbers.findIndex((x) => 
     x > 15
);

console.log(index);

