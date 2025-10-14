/*
1. map() 
--------

# The map() method is used with arrays.
It creates a new array by applying a function to each element of the original array.

syntex 
-------
array.map(function(element, index, array) {
  // return new value for this element
})

Parameters:
    - element	Current item in the array
    - index	(Optional) Index of the current item
    - array	(Optional) Reference to the original array


Example 1: Basic Use
-----------------------

    let numbers = [1, 2, 3, 4];

    let doubled = numbers.map(function(num) {
    return num * 2;
    });

    console.log(doubled); // [2, 4, 6, 8]
    console.log(numbers); // [1, 2, 3, 4] (original unchanged)

    map() always returns a new array, it doesnât change the origin

Example 2: Using Arrow Function
-------------------------------------

    let numbers = [10, 20, 30];
    let half = numbers.map(num => num / 2);

    console.log(half); // [5, 10, 1


Example 3: With Objects
---------------------------

    let students = [
    { name: "Dk", marks: 80 },
    { name: "Nikhil", marks: 90 },
    { name: "Ravi", marks: 70 }
    ];

    let names = students.map(student => student.name);

    console.log(names); // ["Dk", "Nikhil", "Ravi"]

 Example 4: Using Index
-------------------------
    let arr = ["a", "b", "c"];

    let result = arr.map((item, index) => item + index);

    console.log(result); // ["a0", "b1", "c2"]

2. filter 

# 
The filter() method is used with arrays.
It creates a new array that includes only the elements that pass a given test (condition).

Syntax:
-------
    array.filter(function(element, index, array) {
    // return true or false
    })

Parameters:
    element	Current value being processed
    index	(Optional) Index of the element
    array	(Optional) Reference to the original array


Example 1: Basic Use
----------------------

    let numbers = [10, 20, 30, 40, 50];

    let above30 = numbers.filter(function(num) {
    return num > 30;
    });

    console.log(above30); // [40, 50]

    ð It goes through each number and keeps only those where the condition is true (num > 30)

Example 2: Using Arrow Function
-------------------------------------

    let numbers = [5, 12, 8, 130, 44];

    let bigNumbers = numbers.filter(num => num > 10);

    console.log(bigNumbers); // [12, 130

Example 3: Filtering Objects
----------------------------------

    let students = [
    { name: "Dk", marks: 85 },
    { name: "Nikhil", marks: 40 },
    { name: "Ravi", marks: 75 }
    ];

    let passed = students.filter(student => student.marks >= 50);

    console.log(passed);
    /*
    [
    { name: "Dk", marks: 85 },
    { name: "Ravi", marks: 75 }
    ]
5. Key Points
---------------------
   - Returns	A new array
   - Original array	â Not changed
   - Condition	Must return true to keep the element
   - Length of new array	Can be smaller (depends on conditio

3. Reduce 
------------
# The reduce() method reduces (or combines) all elements of an array into a single value â like a sum, average, product, or even an object.

It executes a function on each element, passing along a ârunning totalâ (called the accumula

Syntax:

array.reduce(function(accumulator, currentValue, index, array) {
  // return updated accumulator
}, initialValue);

Parameters:

    - accumulator - 	The running total (result so far)
    - currentValue - 	The current element being processed
    - index -	(Optional) The current index
    - array -	(Optional) The original array
    - initialValue -	The starting value for accumulator - (optional but recommended)

Example 1: Sum of All Numbers
 --------------------------------

    let numbers = [10, 20, 30, 40];

    let total = numbers.reduce(function(acc, curr) {
    return acc + curr;
    }, 0);

    console.log(total); // 100

    How it works:

    Step	acccurr	Return

    1	0	10	10
    2	10	20	30
    3	30	30	60
    4	60	40	100
    Final result = 100

Example 2: Using Arrow Function
----------------------------------
    let numbers = [1, 2, 3, 4];
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(sum); // 10

Example 3: Find Maximum Value
--------------------------------

let numbers = [10, 25, 5, 40, 15];

let max = numbers.reduce((acc, curr) => {
  return acc > curr ? acc : curr;
});

console.log(max); // 40

ð Here, each step compares two numbers and keeps the larger one
_____________________________________________

reduce() vs map() vs filter()
-------------------------------
Method	Purpose	Returns

- map()	Transforms each element	New array
- filter()	Selects certain elements	New array
- reduce()	Combines elements into one value	Single value (number, object, array, etc.)

example
----------

here the problem statement is you have calculate the total price of of the product which in the cart and the 50 % discount on all the cart product and then total price. 

const products = [

{name: "Laptop", price: 499, color: "white", inShoppingCart: true},

{name: "Smartphone", price: 899, color: "black",  ShoppingCart: false},

{name: "Headphones", price: 50,color: "white", inShoppingCart: false},

{name: "Tablet", price: 199,color: "grey", inShoppingCart: true},

{name: "Keyboard", price: 210,color: "blue", inShoppingCart: false}

]

const cartTotal = products.filter(item => item.inShoppingCart == true ).map(p => p.price * 0.5 ).reduce((total , currentPrice) =>{
    return total + currentPrice ;
} ,0 )

console.log(cartTotal) // 349 


*/