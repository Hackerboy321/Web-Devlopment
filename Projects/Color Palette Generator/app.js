const generateBtn = document.getElementById("generate-btn") ; 
generateBtn.addEventListener("click" , showColorPalette) ;
const boxes = document.querySelectorAll(".box");
const colorCodes = document.querySelectorAll(".color-code");

let boxcolor ;


function getColor()
{
    let Red = Math.floor(Math.random() * 256 )
    let Green = Math.floor(Math.random() * 256 )
    let Black = Math.floor(Math.random() * 256 ) 

    return [Red , Green, Black] ; 
}

function rgbToHex(r, g, b) {
    const componentToHex = (c) => {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex; // Adds a leading zero if needed
    }
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
const gethex = rgbToHex(getColor[0], getColor[1] , getColor[2]) ; 

function showColorPalette()
{
    for (let i = 0; i < boxes.length; i++) {
        const boxcolor = getColor();
        const hexaColorValue = rgbToHex(boxcolor[0], boxcolor[1], boxcolor[2]) ; 
        boxes[i].style.backgroundColor = `rgb(${boxcolor[0]}, ${boxcolor[1]}, ${boxcolor[2]})`;
        colorCodes[i].textContent = hexaColorValue ;
      }        
}