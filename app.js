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

for (let i = 0; i < numbers.lenght; i++);

if (numbers[i] % 2 === 0) {
  console.log(numbers[i]);
}
// } else if (numbers[i] % 2 > 0) {
//   console.log(numbers[i]);
// }
