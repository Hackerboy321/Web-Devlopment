/ 
   /* JavaScript Math Module
   =====================
   The Math object provides static properties and methods for mathematical operations.
   Access directly via Math (e.g., Math.PI, Math.sqrt(16)). Not a constructor.
  
   1. PROPERTIES
   -------------
   - Math.E        â 2.718 (Euler's number)
   - Math.LN2      â 0.693 (natural log of 2)
   - Math.LN10     â 2.303 (natural log of 10)
   - Math.LOG2E    â 1.443 (base-2 log of E)
   - Math.LOG10E   â 0.434 (base-10 log of E)
   - Math.PI       â 3.142 (Ï)
   - Math.SQRT1_2  â 0.707 (square root of 1/2)
   - Math.SQRT2    â 1.414 (square root of 2)
  
   2. METHODS
   ---------
   
      2.1 Rounding
      -----------
        - Math.abs(x)      // Absolute value, e.g., Math.abs(-5) â 5
        - Math.ceil(x)     // Round up, e.g., Math.ceil(4.1) â 5
        - Math.floor(x)    // Round down, e.g., Math.floor(4.9) â 4
        - Math.round(x)    // Round to nearest, e.g., Math.round(4.5) â 5
        - Math.trunc(x)    // Remove fraction, e.g., Math.trunc(4.9) â 4
        - Math.sign(x)     // Sign: -1, 0, 1, -0, NaN, e.g., Math.sign(-5) â -1
     
      2.2 Exponentiation & Logarithms
      ----------------------------------
        - Math.pow(x, y)   // x^y, e.g., Math.pow(2, 3) â 8
        - Math.sqrt(x)     // Square root, e.g., Math.sqrt(16) â 4
        - Math.cbrt(x)     // Cube root, e.g., Math.cbrt(8) â 2
        - Math.exp(x)      // E^x, e.g., Math.exp(1) â 2.718
        - Math.log(x)      // Natural log, e.g., Math.log(Math.E) â 1
        - Math.log2(x)     // Base-2 log, e.g., Math.log2(8) â 3
        - Math.log10(x)    // Base-10 log, e.g., Math.log10(100) â 2
      
      2.3 Trigonometric (angles in radians)
      ----------------------------------------
        
        - Math.sin(x)      // Sine, e.g., Math.sin(Math.PI/2) â 1
        - Math.cos(x)      // Cosine, e.g., Math.cos(0) â 1
        - Math.tan(x)      // Tangent, e.g., Math.tan(Math.PI/4) â 1
        - Math.asin(x)     // Arcsine, [-1, 1] â [-Ï/2, Ï/2], e.g., Math.asin(1) â Ï/2
        - Math.acos(x)     // Arccosine, [-1, 1] â [0, Ï], e.g., Math.acos(0) â Ï/2
        - Math.atan(x)     // Arctangent, â [-Ï/2, Ï/2], e.g., Math.atan(1) â Ï/4
        - Math.atan2(y, x) // Angle of (x, y), e.g., Math.atan2(1, 1) â Ï/4
      
      2.4 Miscellaneous
      ---------------------

        - Math.random()    // Random [0, 1), e.g., Math.random() â 0.723...
        - Math.max(...args)// Max value, e.g., Math.max(1, 5, 2) â 5
        - Math.min(...args)// Min value, e.g., Math.min(1, 5, 2) â 1
        - Math.hypot(...args) // â(sum of squares), e.g., Math.hypot(3, 4) â 5
     
   3. NOTES
   --------
   - All methods/properties are static.
   - Returns NaN for invalid inputs (e.g., Math.sqrt(-1)).
   - Trig methods use radians. Convert: degrees   (Math.PI / 180).
   - Math.random() is not cryptograp

   */