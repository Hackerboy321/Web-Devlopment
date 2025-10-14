/*
Event and Interactivity of website 
______________________________________

> Some Comman Event
-------------------

onclick -	When user clicks an element	Button click
mouseenter - 	When user hovers over an element	Show tooltip
mouseleave - 	When cursor leaves element	Hide tooltip
keydown / keyup - 	When a key is pressed/released	Typing input
submit - 	When a form is submitted	Login form submit
load - 	When page finishes loading	Setup scripts
change -	When input value changes	Dropdown selection
input -	When user types in input	Live search bar

>  Add Events
---------------

Using addEventListener() (Best Way)
-----------------------------------

    The modern & recommended method.

    let btn = document.querySelector("button");

    btn.addEventListener("click", function() {
    alert("You clicked me!");
    })

    Advantages:

        You can attach multiple listeners to one element.

        You can remove them later if needed.

        More flexible and powerful.

> Removing Event Listeners
----------------------------

If you want to remove an event, you must use a named function:

function changeColor() {
  text.style.color = "red";
}

btn.addEventListener("click", changeColor);
btn.removeEventListener("click", changeColor); // removes it

> Event Object
------------------

    Whenever an event happens, JavaScript gives you an event object e
    that contains details about it.

    Example:

    btn.addEventListener("click", function(e) {
    console.log(e.type);   // click
    console.log(e.target); // which element was clicked
    });

> What Is an Event Handler?
---------------------------

    An event handler is a function that runs when a specific event happens.
    It literally âhandlesâ the 

    For example:

    function sayHello() {
    alert("Hello DK!");
    }

    let btn = document.querySelector("button");
    btn.onclick = sayHello;   // <-- This is an event handler

    Here:

        onclick is the event property

        sayHello is the event handler function

    So when the button is clicked ->  the handler run

    Using addEventListener() â â­ Recommended â­

    let btn = document.querySelector("button");

    btn.addEventListener("click", function() {
    console.log("Clicked!");
    });

    btn.addEventListener("click", function() {
    console.log("Second handler also runs!"

> this keyword concept 
-------------------------

this keyword

    Inside an event handler, this refers to the element that the event listener is attached to

    <button id="btn">Click Me</button>

<script>
  let btn = document.getElementById("btn");

  btn.addEventListener("click", function() {
    console.log(this); 
     // refers to <button id="btn">
    this.style.color = "red";
  });
</scrip>

this === the button because the listener is attached directly to it.

> e.target (or event.target)
------------------------------
    Refers to the actual element that triggered the event the origin of the event.

    <div id="parent">
    <button id="child">Click Me</button>
    </div>

    <script>
    let parent = document.getElementById("parent");

    parent.addEventListener("click", function(e) {
        console.log(this);        // refers to #parent
        console.log(e.target); // refers to the element actually clicked (could be button)
    });

    If you click on the button:

    this - <div id="parent">

    e.target - <button id="child">

</script>
*/
