/* 

const user = {
    fastName : "Mr. ",
    lastName : "Robot",
    name : function () 
    {
        console.log(`my name is ${user.fastName} ${user.lastName}`)
    }
user.name()


OUTPUT
-------
my name is Mr.  Robot

}
------------------------------------------------------------------------

but what happen when we declear the name function() outside the object and insted of name we have multiple object calling the same function in that case we use this. oprator.

this => so this oprator the member by which object it calling. 

example 
---------

function fullName() 
{
    console.log(`my full name is ${this.fname} ${this.lname}`)
}

const user = {
    fname : "dk" ,
    lname : "bose",
    name : fullName 
  
}

const user2 = {
    fname : "Mr. " ,
    lname : "Robot",
    name : fullName 
  
}

user.name() // here the object is user so this = user 
user2.name() // here the object is user so this = user2  

OUTPUT
------

my full name is dk bose
my full name is Mr.  Robot


*/