/*
# Selecting Elements
_________________________

a) document.getElementById()
--------------------------------

    - Selects one element by its id.

    - let title = document.getElementById("heading");


b) document.getElementsByClassName()
---------------------------------------

    - Selects multiple elements with same class returns HTMLCollection (like an array but not exactly).

    - let items = document.getElementsByClassName("item");

    - You can access elements by index:

    - items[0].style.color = "red";


c) document.getElementsByTagName()
--------------------------------------

    - Selects by HTML tag name:

    - let divs = document.getElementsByTagName("div");


d) document.querySelector()
--------------------------------

    - Selects first matching element using CSS selector.

    - let firstPara = document.querySelector("p");          // first <p>
    - let firstItem = document.querySelector(".item");      // first class="item"
    - let heading = document.querySelector("#heading");     // id="heading"


---

e) document.querySelectorAll()

Selects all matching elements and returns NodeList.

let allItems = document.querySelectorAll(".item");
allItems.forEach(item => item.style.color = "blue" ; 

to convert this NodeList into list we use Array.from(NodeList).


2. Changing / Modifying Elements
___________________________________

> Change Text
---------------
    let title = document.querySelector("#heading");
    title.textContent = "Hello DK!";


> Change HTML inside
----------------------
    title.innerHTML = "<em>Hello DK!</em>";

> Change Attributes
-------------------------
    let img = document.querySelector("img");
    img.src = "newimage.jpg";
    img.alt = "New picture";
    img.hieght = "10px"


> Change CSS Style
------------------------------

    title.style.color = "red";
    title.style.backgroundColor = "yellow";


> Create New Element
--------------------------

    let newPara = document.createElement("p");
    newPara.textContent = "This is a new paragraph.";

> Add it to the DOM
------------------------

    document.body.appendChild(newPara);
    
Or insert inside another element:
-------------------------------------

    let div = document.querySelector(".container");
    div.appendChild(newPara);

> Remove an Element
----------------------------

    let oldPara = document.querySelector("p");
    oldPara.remove();


# Modifying Classes
____________________________________________________________________________________

> Add a class
-----------------
    select the element first

        let title = document.querySelector("h1");
        
        title.classList.add("highlight");

> Remove a class
---------------------

    title.classList.remove("highlight");

> Toggle a class (adds if missing, removes if present)
-----------------------------------------------------------

    title.classList.toggle("dark-mode");


    */