/*



---

ð¦ JavaScript Object Literals

ð An object literal is a way to directly define and create objects in JavaScript using { key: value } syntax.
Itâs like a dictionary in Python or a struct in C++.


---

1. Basic Syntax

const student = {
  name: "Dk",
  age: 18,
  isActive: true
};

console.log(student.name);   // "Dk"
console.log(student["age"]); // 18

Keys = name, age, isActive

Values = "Dk", 18, true



---

2. Nested Objects

Objects can contain other objects or arrays:

const person = {
  name: "Dk",
  address: {
    city: "Garhwal",
    state: "Uttarakhand"
  },
  hobbies: ["coding", "gym"]
};

console.log(person.address.city);   // Garhwal
console.log(person.hobbies[0]);     // coding


---

3. Adding & Removing Properties

const car = { brand: "Tesla" };

car.model = "Model 3";   // add new property
delete car.brand;        // remove property

console.log(car); // { model: "Model 3" }


---
# how to iterate an object.

1. by for in loop 

const user =  {

    name: "dkbose",
    branch : "cseaiml",
    age : 19, 
    gander : "male"
}

for (const key in user) {
    console.log(`${key} : ${user[key]} `) 
   
}

output
-------
name : dkbose 
branch : cseaiml 
age : 19 
gander : male 

2. by object.keys(objectName) mathod 

const user =  {

    name: "dkbose",
    branch : "cseaiml",
    age : 19, 
    gander : "male"

}

const arr = Object.keys(user)

arr.forEach(key => {

console.log(`${key} : ${user[key]}`)
    
});

outputs
---------

name : dkbose
branch : cseaiml
age : 19
gander : male

3. object.values(objectName) only can access the value of key value pairs 

const user =  {

    name: "dkbose",
    branch : "cseaiml",
    age : 19, 
    gander : "male"

}

 let arr = Object.values(user)
arr.forEach(element => {
    console.log(element) ; 
});

output 
-------
dkbose
cseaiml
19
male

4. objcet.entries(objectName) 

const user =  {

    name: "dkbose",
    branch : "cseaiml",
    age : 19, 
    gander : "male"

}

 let arr = Object.entries(user)
arr.forEach(element => {
   console.log(`${element[0]} : ${element[1]}`) ; 
});

Output
-------
name : dkbose
branch : cseaiml
age : 19
gander : male



4. Shorthand Properties

If the key and variable name are same, you can write shorter:

const name = "Dk";
const age = 18;

const user = { name, age }; 
// same as { name: name, age: age }


---

5. Computed Property Names

You can use variables as keys:

const key = "score";

const game = {
  [key]: 100
};

console.log(game.score); // 100


---

6. Methods in Object Literals

Objects can have functions (methods):

const user = {
  name: "Dk",
  greet() {
    console.log("Hello " + this.name);
  }
};

user.greet(); // Hello Dk

this refers to the object itself.



---

7. Object Destructuring

Extract values easily:

const student = { name: "Dk", age: 18 };

const { name, age } = student;

console.log(name); // "Dk"
console.log(age);  // 18


---

8. Spread Operator with Objects

Clone or merge objects:

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };

const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3 }


---

9. Optional Chaining (?.)

Avoids errors if a property doesnât exist:

const user = { profile: { email: "dk@email.com" } };

console.log(user.profile?.email);  // "dk@email.com"
console.log(user.address?.city);   // undefined (no error)


---

10. JSON vs Object Literal

Object Literal = JS syntax ({ key: value }, keys can be unquoted).

JSON = Data format ({ "key": "value" }, keys must be quoted, values are usually strings/numbers/booleans).



---

â Why important for React/React Native?

Props & state are stored as objects.

API responses come as objects (JSON).

Styling in React Native uses object literals:

const styles = {
  container: {
    flex: 1,
    backgroundColor: "white"
  

*/