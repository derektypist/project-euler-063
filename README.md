# Project Euler 063 - Powerful Digit Counts

The 5-digit number, 16807=7<sup>5</sup>, is also a fifth power.  Similarly, the 9-digit number, 134217728=8<sup>9</sup>, is a ninth power.

How many positive integers are of length n and an nth power?

Information at [Project Euler 063](https://projecteuler.net/problem=63)

## UX

**Getting Started**

Enter a whole number between 1 and 21 (without leading zeros such as 01) and select the Submit Button.  You will see the length of the digits entered as well as the number of positive integers of that length and power, unless you have made an invalid input.  Select the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect the function `powerfulDigitCounts(1)` to return a number.

As a user, I expect the function `powerfulDigitCounts(1)` to return 9.

As a user, I expect the function `powerfulDigitCounts(2)` to return 6.

As a user, I expect the function `powerfulDigitCounts(3)` to return 5.

As a user, I expect the function `powerfulDigitCounts(4)` to return 4.

As a user, I expect the function `powerfulDigitCounts(5)` to return 3.

As a user, I expect the function `powerfulDigitCounts(6)` to return 3.

As a user, I expect the function `powerfulDigitCounts(7)` to return 2.

As a user, I expect the function `powerfulDigitCounts(8)` to return 2.

As a user, I expect the function `powerfulDigitCounts(10)` to return 2.

As a user, I expect the function `powerfulDigitCounts(21)` to return 1.

User Stories on function `powerfulDigitCounts(n)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 063](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-63-powerful-digit-counts)

**Information Architecture**

The function `powerfulDigitCounts(n)` returns a number, where `n` is a number from 1 to 21.

## Features

Allows the user to enter the length of the digits in order to find the number of positive integers of that length and the power equal to that length.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.

Extensions include the count of all n-digit numbers which are nth power.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.2.3 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-063) at the main branch.

## Credits

### Content

Written by me.

### Acknowledgement

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)