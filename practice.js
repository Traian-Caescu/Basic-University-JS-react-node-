let x = 3
let y = 2.5
y = x+y
let firstName = 'bob'
let lastName = 'smith'
let wholeName = firstName + ' ' + lastName
console.log('Full name : ' + firstName + ' ' + lastName + ' y = ', y)
console.log(`Full name: ${firstName} ${lastName} and y=${y}`)
let dayNum = Math.floor(Math.random() * 7) +1; 
switch(dayNum) {
    case 1: console.log(`Sunday`); break;
    case 2: console.log(`Monday`); break;
    case 3: console.log(`Tuesday`); break;
    case 4: console.log(`Wednesday`); break;
    case 5: console.log(`Thursday`); break;
    case 6: console.log(`Friday`); break;
    case 7: console.log(`Saturday`); break;
}
for (let i = 0; i<3; i++) {
    console.log(`i=${i}`);
}
j=0;
do{
    console.log(`j=${j}`);
    j++;
} while (j<3)


let circle = {
    radius:0,
    area:0,
    colour: 'blue',
    calcArea: function(){
        circle.area = Math.pi * circle.radius * circle.radius;
    },
    setRadius: function(r){
        circle.radius=r;
        circle.calcArea();
    },
    getArea: function(){
        return circle.area;
    }
}
console.log(`Circle area is ${circle.getArea()}`);
circle.setRadius(10);
console.log(`Circle area is ${circle.getArea()}`);


let group = [
    {
        fName:'Jimmy',
        lName: 'Riddle',
        age: 24
    },
    {
        fName: 'Jane',
        lName: 'Doe',
        age: 15
    },
    {
        fName: 'MCsdf',
        lName: 'dfsdf',
        age: 3
    }
]
for (let m=0; m<group.length; m++){
    console.log(`${group[m].fName} ${group[m].lName} is ${group[m].age} years old`)
}
let s = 0
do {
    console.log('*');
    s++;
} while (s < 80)

function createString(char, length){
    return char.repeat(length);
}
console.log(createString('*', 5));
console.log(createString('A', 10));

function celsiusToFarenheit(celsius){
    return (celsius * 9/5) + 32;
}
const celsius = 20;
const fahrenheit = celsiusToFarenheit(celsius);
console.log(`${celsius} degrees Celsius is ${fahrenheit} degrees Fahrenheit.`);

function convertTemperature(value, convertTo){
    if (convertTo === 'toC') {
        return (value - 32) * 5/9;
    } else if (convertTo === 'toF'){
        return (value * 9/5) +32;
    } else {
        throw new Error('Invalid conversion type');
    }
}

try {
    console.log(convertTemperature(100, 'toC'));
    console.log(convertTemperature(34, 'toF'));
} catch (error){
    console.error(error.message);
}

function power(x, n){
    if (n < 0) {
        throw new Error('n must be a positive integer');
    }
    let result = 1;
    for (let i = 0; i < n; i++){
        result *= x;
    }
    return result;
}
try {
    console.log(power(6, 3));
    console.log(power(8,3));
} catch (error) {
    console.error(error.message);
}
function factorial(n) {
    if (n < 0) {
        throw new Error('n must be a non-negative integer.');
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}
try {
    console.log(factorial(5)); 
} catch (error) {
    console.error(error.message);
}
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
function sineDegree(x, terms = 10) {
    let radian = x * Math.PI / 180;
    let sine = 0;

    for (let i = 0; i < terms; i++) {
        let sign = (i % 2 === 0) ? 1 : -1;
        sine += sign * Math.pow(radian, 2 * i + 1) / factorial(2 * i + 1);
    }

    return sine;
}
for (let degrees = 0; degrees <= 360; degrees += 10) {
    let sinUsingTaylor = sineDegree(degrees);
    let sinUsingMath = Math.sin(degrees * Math.PI / 180);
    console.log(`sin(${degrees}°): Taylor Series = ${sinUsingTaylor}, Math.sin = ${sinUsingMath}`);
}
//-------------------------------------------------------------
const programmingLanguages = [
    'JavaScript', 'Python', 'Java', 'C#', 'C++', 'Ruby', 'Swift', 'Go', 'Kotlin', 'PHP',
    'TypeScript', 'Scala', 'Shell', 'PowerShell', 'Perl', 'Rust', 'R', 'Dart', 'Elixir', 'Lua'
  ];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function outputArray(array) {
    array.forEach(element => console.log(element));
  }
  
  // 1. Output programming languages in a loop
  outputArray(programmingLanguages);
  
  // 2. Output them in a random order and then in reverse
  outputArray(shuffleArray([...programmingLanguages]));
  outputArray(programmingLanguages.reverse());
  
  // 3. Create an array of numbers and output first and last
  let numbers = Array.from({ length: 20 }, (_, index) => index + 1);
  console.log(numbers[0], numbers[numbers.length - 1]);
  
  // 4. Output unique random numbers
  let uniqueNumbers = new Set();
  while (uniqueNumbers.size < 20) {
    uniqueNumbers.add(Math.floor(Math.random() * 100) + 1);
  }
  outputArray([...uniqueNumbers]);
  
  // 5. Create object with name and age, output it, then increase age and output again
  let person = { name: 'John', age: 25 };
  console.log(person);
  person.age += 1;
  console.log(person);
  
  // 6. Create an array of objects and determine if they can vote
  let people = [
    { name: 'Susan', age: Math.floor(Math.random() * (30 - 10 + 1)) + 10 },
    { name: 'Jim', age: Math.floor(Math.random() * (30 - 10 + 1)) + 10 },
    { name: 'Joe', age: Math.floor(Math.random() * (30 - 10 + 1)) + 10 },
    { name: 'Mary', age: Math.floor(Math.random() * (30 - 10 + 1)) + 10 },
    { name: 'Laura', age: Math.floor(Math.random() * (30 - 10 + 1)) + 10 }
  ];
  
  people.forEach(person => {
    console.log(`${person.name} is ${person.age} so ${person.age >= 18 ? 'can' : 'is too young to'} vote`);
  });
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  
  function getCenturyCode(year) {
    const century = Math.floor(year / 100);
    const centuryOffsetMap = {
      17: 4,
      18: 2,
      19: 0,
      20: 6,
      21: 4,
      22: 2,
      23: 0,
    };
    return centuryOffsetMap[century];
  }
  
  function getMonthCode(month, leapYear) {
    const monthCodeMap = {
      1: leapYear ? 6 : 0,
      2: leapYear ? 2 : 3,
      3: 3,
      4: 6,
      5: 1,
      6: 4,
      7: 6,
      8: 2,
      9: 5,
      10: 0,
      11: 3,
      12: 5,
    };
    return monthCodeMap[month];
  }
  
  function getDayOfWeek(dateObject) {
    const { day, month, year } = dateObject;
    const leapYear = isLeapYear(year);
    const monthCode = getMonthCode(month, leapYear);
    const centuryCode = getCenturyCode(year);
    const yearCode = (year % 100) + Math.floor((year % 100) / 4);
  
    const dayOfWeek = (yearCode + monthCode + centuryCode + day) % 7;
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    return days[dayOfWeek];
  }
  
  // Date object to hold the date we want to check
  const dateObject = {
    day: 14,
    month: 9,
    year: 1752,
  };
  
  console.log(`${dateObject.day}/${dateObject.month}/${dateObject.year} is a ${getDayOfWeek(dateObject)}`);
  