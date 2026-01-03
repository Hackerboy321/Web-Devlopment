
function changeColor()
{
    let Red = Math.floor(Math.random() * 256 )
    let Green = Math.floor(Math.random() * 256 )
    let Black = Math.floor(Math.random() * 256 ) 

    return [ Red , Green , Black]; 
}


const getColor = changeColor() ; 
 


function rgbToHex(r, g, b) {
    const componentToHex = (c) => {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex; // Adds a leading zero if needed
    }
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
const gethex = rgbToHex(getColor[0], getColor[1] , getColor[2]) ; 