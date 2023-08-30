// console.log("Hello World!\n==========\n");

// // Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");
// let response = prompt("Enter a number here:");
// function printOdds(count) {
//   for (let i = 0; i <= count; i++) {
//     if (i % 2 != 0) {
//       console.log(`${i} is an odd number!`);
//     }
//   }
// }
// printOdds(response);
// // Exercise 2 Section
// console.log("EXERCISE 2:\n==========\n");
// let userInputName = prompt("Enter your name:");
// let userInputAge = prompt("Enter your age:");
// function checkAge(userName, age) {
//   let aboveSixteen = `Congrats ${userName}, you can drive!`;
//   let belowSixteen = `Sorry ${userName}, but you need to wait until you are 16.`;
//   if (age >= 16) {
//     console.log(aboveSixteen);
//   } else {
//     console.log(belowSixteen);
//   }
// }
// checkAge(userInputName, userInputAge);

// //Exercise 3
// console.log("Exercise 3: ================\n");
// let userInputX = prompt(
//   "Enter any number for your x coordinate.  It can be positive or negative:"
// );
// let userInputY = prompt(
//   "Enter any number for your Y coordinate.  It can be positive or negative:"
// );
// function cartisianPlane(x, y) {
//   if (x == 0 && y == 0) {
//     console.log("You are at the origin");
//   } else if (x > 0 && y > 0) {
//     console.log(`${x},${y} is in Quadrant 1`);
//   } else if (x < 0 && y > 0) {
//     console.log(`${x},${y} is in Quadrant 2`);
//   } else if (x < 0 && y < 0) {
//     console.log(`${x},${y} is in Quadrant 3`);
//   } else if (x > 0 && y < 0) {
//     console.log(`${x},${y} is in Quadrant 4`);
//   } else {
//     console.log("You did not enter a valid number.");
//   }
// }
// cartisianPlane(userInputX, userInputY);

//Exercise 4
console.log("Exercise 4: ================");

function willItTriangle(sideLength1, sideLength2, sideLength3) {
  if (!isNaN(sideLength1) && !isNaN(sideLength2) && !isNaN(sideLength3)) {
    if (
      sideLength1 + sideLength2 <= sideLength3 ||
      sideLength2 + sideLength3 <= sideLength1 ||
      sideLength1 + sideLength3 <= sideLength2
    ) {
      console.log(
        sideLength1 + sideLength2 <= sideLength3,
        sideLength2 + sideLength3 <= sideLength1,
        sideLength1 + sideLength3 <= sideLength2
      );
      console.log(
        `${sideLength1}, ${sideLength2}, ${sideLength3} is an invalid triangle...`
      );
    } else if (sideLength1 === sideLength2 && sideLength1 === sideLength3) {
      console.log(
        `${sideLength1}, ${sideLength2}, ${sideLength3} is an Equalateral triangle!`
      );
    } else if (
      sideLength1 === sideLength2 ||
      sideLength1 === sideLength3 ||
      sideLength2 === sideLength3
    ) {
      console.log(
        `${sideLength1}, ${sideLength2}, ${sideLength3} is an Isosceles triangle!`
      );
    } else if (
      sideLength1 != sideLength2 &&
      sideLength1 != sideLength3 &&
      sideLength2 != sideLength3
    ) {
      console.log(
        `${sideLength1}, ${sideLength2}, ${sideLength3} is a Scalene triangle!`
      );
    }
  } else {
    console.log("Please check: inputs were not numbers.");
  }
}

let userInputS1 = +prompt(
  "Enter your first number to start forming a triangle:"
);
let userInputS2 = +prompt(
  "Enter your second number to start forming a triangle:"
);
let userInputS3 = +prompt(
  "Enter your third number to start forming a triangle:"
);
willItTriangle(userInputS1, userInputS2, userInputS3);
