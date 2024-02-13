/***
 * objective: get base ,height of a triangle .calculate the area by using the provided formula and display the area.
 * step-1 : get base value of the triangle
 * step-2: added an id in the base input field
 * step-3: use getElementByID to access the input
 * step-4: get value from the input field.(value is string now)
 * step-5: convert the value to a number.use parseFloat
 * 
 */

function calculateTrianleArea(){
    // get triangle base value
   const triangleBaseInput = document.getElementById('triangle-base');
   const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText)
  console.log(base);

// get triangle height value
const triangleHeightInput = document.getElementById('triangle-height');
const triangleHeightText = triangleHeightInput.value;
const height = parseFloat(triangleHeightText);
console.log(height);

// area of the triangle calculation
const area = 0.5 * base * height;
console.log('area of the triangle is: ',area);

// display triangle area
const triAngleAreaSpan = document.getElementById('triangle-area');
triAngleAreaSpan.innerText = area;
}