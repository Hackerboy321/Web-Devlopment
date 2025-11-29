let displaycookieCount = document.getElementById("counter");
let cookie = document.getElementById("cookie") ;  
let grandMaBtn = document.getElementById("item-1") ;
let bakerBtn = document.getElementById("item-2") ; 
let factoryBtn = document.getElementById("item-3") ; 
let displaycps = document.getElementById("cps") ; 
let cookieCountr = Number(localStorage.getItem("cookieCount"));
let cps = Number(localStorage.getItem("cps")) ; 

// for increasing the count when the cookie is get clicked.
function increaseCount()
{
    cookieCountr++; 
    displaycookieCount.innerText = cookieCountr ;
    saveGame() ;
} 

// the automatic cookie cunter when the user buy the grand ma by - 1cps 
function increaseCountByGrandMa()
{
    if( cookieCountr >= 100)
    {
        cookieCountr = cookieCountr - 100 ; 
        cps = cps + 1 ; 
        displaycps.innerText = `${cps}/s`;
        setInterval(function(){
            cookieCountr = cookieCountr + 1 ; 
            displaycookieCount.innerText = cookieCountr ; 
        }, 1000)
    }

    else alert(" You don't have any enough cookies to buy the grandma") ;
    saveGame() ; 
}

// the automatic cookie genration when the user buy the baker by = 10 cps.
function increaseCountByBaker()
{
    if(cookieCountr >= 500)
    {
        cookieCountr = cookieCountr - 500 ; 
        cps = cps  + 10 ; 
        displaycps.innerText = `${cps}/s`;
        setInterval(function(){
            cookieCountr = cookieCountr + 10 ; 
            displaycookieCount.innerText = cookieCountr ; 

        },1000)
    }

    else alert("You don't have enough cookies to buy the Baker ") ; 
    saveGame() ; 
}

// automatic cookie genration when the user buy Factory by - 100 cps.
function increaseCountByFactory()
{
    if(cookieCountr >= 5000)
    {
        cookieCountr = cookieCountr - 5000 ; 
        cps = cps + 100 ; 
        displaycps.innerText = `${cps}/s` ; 
        setInterval(function(){
            cookieCountr = cookieCountr + 100 ; 
            displaycookieCount.innerText = cookieCountr ; 
        }, 1000);
    }

    else alert("You don't have enough cookie to buy the Factory") ;
    saveGame() ;  
}

// to save the game data at the browser localstorage.
function saveGame()
{
    localStorage.setItem("cookieCount", cookieCountr) ; 
    localStorage.setItem("cps", cps) ;
}

// Initialize display on page load
window.onload = function () {

    // If no saved data, default to 0
    if (isNaN(cookieCountr)) cookieCountr = 0;
    if (isNaN(cps)) cps = 0;

    displaycookieCount.innerText = cookieCountr;
    displaycps.innerText = `${cps}/s`;

    // Reapply CPS intervals based on saved CPS
    if (cps > 0) {
        setInterval(function () {
            cookieCountr += cps;
            displaycookieCount.innerText = cookieCountr;
            saveGame();
        }, 1000);
    }
};

cookie.addEventListener("click" , increaseCount ) ;
grandMaBtn.addEventListener("click", increaseCountByGrandMa ) ; 
bakerBtn.addEventListener("click" , increaseCountByBaker) ; 
factoryBtn.addEventListener("click" , increaseCountByFactory) ; 
