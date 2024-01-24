// Return function: Traditional language syntax
function greaterThan(n) {
  function compare(m) {
    return m > n;
  }
  return compare;
}

let compareFn = greaterThan(10);
console.log(compareFn(11));

// Return function: JavaScript more modern syntax
function greaterThan2(n) {
  return m => m > n;
}

// greaterThan2(10) returns a function m => m > 10 and assigns it to compareFn2
let compareFn2 = greaterThan2(10);
console.log(compareFn2(11)); // can now call compareFn2 which returns true as 11 > 10

// Return one of a selection of functions
function calcArea(shape) {
  switch (shape) {
    case 'triangle': return (base, height) => base * height /2;
    case 'quad'    : return (base, height) => base * height;
    case 'circle'  : return (r) => Math.PI * r * r;
  }
}


let triArea = calcArea('triangle');
console.log(`Area of triangle: ${triArea(5,20)}`);

let circleArea = calcArea('circle');
console.log(`Area of circle: ${circleArea(10)}`);
