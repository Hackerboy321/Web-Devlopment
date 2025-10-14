/*
======================
ð JavaScript Arrays
======================

1. Arrays are used to store multiple values in a single variable.
   Example: let arr = [10, 20, 30, 40];

2. Arrays are **zero-indexed** ->  first element is at index 0.
   Example: arr[0] ->  10

3. Arrays can hold different data types together (numbers, strings, objects, etc.).
   Example: let mix = [1, "hello", true, {a:1}, [2,3]];

4. Length property ->  arr.length gives total number of elements.
   Example: arr.length ->  4

5. Common Array Methods:
   â¤ push()    ->  adds element at the end
   â¤ pop()     ->  removes element from the end and return the poped value.
   â¤ unshift() ->  adds element at the beginning
   â¤ shift()   ->  removes element from the beginning and return the removed value.
   â¤ indexOf() ->  finds index of element (returns -1 if not found)
   â¤ includes()->  checks if element exists (true/false)
   â¤ slice()   ->  copies part of array (does not change original)
   â¤ splice()  ->  removes/replaces/adds elements (changes original)
   {  
      let arr = [ "one" , "two" , "four", "five", "six" ] ; 

      arr.splice(0,1) --->  [ 'two', 'four', 'five', 'six' ]

      arr.splice(2,0, "three") --->  [ 'one', 'two', 'three', 'four', 'five', 'six' ]

      arr.splice(2,2,"3","4") ---> [ 'one', 'two', '3', '4', 'five', 'six' ]
   }

   â¤ concat()  ->  joins two arrays
   â¤ join()    ->  joins array into string
   â¤ reverse() ->  reverses the array
   â¤ sort()    ->  sorts array (default is string sorting)
   {
       if we have the number array so this sort mathod convert all these 
       number in into the string and then sort it , 

       ex - let arr = [29,49,100,39] ; 
       arr.sort() --> [ 100, 29, 39, 49 ] ;
   }

6. Iteration methods (loops):
   â¤ for loop        ->  traditional way
   â¤ for...of loop   ->  directly gives values
   â¤ forEach()       ->  executes a function for each element
   â¤ map()           ->  creates new array with modified values
   â¤ filter()        ->  creates new array with filtered values
   â¤ reduce()        ->  reduces array to a single value

7. Arrays are objects in JS ->  typeof [] is "object".

8. Arrays can be nested (multi-dimensional arrays).
   Example: let matrix = [[1,2],[3,4],[5,6]];
   Access: matrix[1][0] ->  3

9. Spread operator (...) helps to copy/merge arrays.
   Example: let arr2 = [...arr, 50, 60];

10. Destructuring allows unpacking array values.
    Example: let [a, b] = [10, 20];  // a=10, b=20

======================
â­ Key Rule: Array
*/