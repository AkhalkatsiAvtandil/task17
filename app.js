// task 1
for (let i = 0; i < 10; i++) {
  console.log("hello from for loop", i);
}
console.log("after for loop");

// task2
let i = 0;
while (i < 15) {
  console.log("hello from for loop", i);
  i++;
}
//  task 3
let z = 0;
do {
  console.log("hello from do while loop", z);
  z++;
} while (z < 20);
// task 4

const numbers = [45, 56, 78, 89, 101, 234, 333, 457];
// console.log(numbers);
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
}
if (numbers[i] % 2 === 0) {
  const element = numbers[i];
}
// for (let i = 0; i < numbers.lenght; i++) {
//   console.log(numbers[i]);
// }

if (numbers[i] % 2 === 0) {
  console.log(numbers[i]);
}
if (numbers[1] % 2 === 0) {
  console.log(numbers[1]);
}
if (numbers[2] % 2 === 0) {
  console.log(numbers[2]);
}
if (numbers[6] % 2 === 0) {
  console.log(numbers[6]);
}
if (numbers[0] % 2 === 0) {
  console.log(numbers[0]);
}
if (numbers[5] % 2 === 0) {
  console.log(numbers[5]);
} else if (numbers[i] % 2 > 0) {
  console.log(numbers[i]);
}

// // task5
let currentDay = 0;
const newdate = "mo";

switch (currentDay) {
  case "su":
    currentDay = 0;
    console.log(" today is ", currentDay);
    break;
  case "mo":
    currentDay = 1;
    console.log(" today is ", currentDay);
    break;
  case "tu":
    currentDay = 2;
    console.log(" today is ", currentDay);
    break;
  case "we":
    currentDay = 3;
    console.log(" today is ", currentDay);
    break;
  case "th":
    currentDay = 4;
    console.log(" today is ", currentDay);
    break;
  case "fr":
    currentDay = 5;
    console.log(" today is ", currentDay);
    break;
  case "sa":
    currentDay = 6;
    console.log(" today is ", currentDay);
    break;

  default:
    currentDay = 1;
    console.log(" today is ", currentDay);
    break;
}
