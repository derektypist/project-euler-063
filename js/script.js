// Function Show Solution
function showSolution() {
    // Set Up Variables
    let txt = "";
    let examples = [1,2,3,4,5,6,7,8,10,21];
    // Apply For Loop
    for (let example of examples) {
        txt += `There are ${powerfulDigitCounts(example)} positive integers of length ${example} and power of ${example}.`;
    }

    // Display Information in the Browser
    document.getElementById("solution").innerHTML = txt;
}

/*
    Function to return the number of positive integers of length n and an
    nth power

    powerfulDigitCounts(1)  returns 9
    powerfulDigitCounts(2)  returns 6
    powerfulDigitCounts(3)  returns 5
    powerfulDigitCounts(4)  returns 4
    powerfulDigitCounts(5)  returns 3
    powerfulDigitCounts(6)  returns 3
    powerfulDigitCounts(7)  returns 2
    powerfulDigitCounts(8)  returns 2
    powerfulDigitCounts(10) returns 2
    powerfulDigitCounts(21) returns 1

*/
function powerfulDigitCounts(n) {
    function countDigits(num) {
        let counter = 0;
        while (num > 0) {
            num = Math.floor(num / 10);
            counter++;
        }
        return counter;
    }

    let numbersCount = 0;
    let curNum = 1;
    while (curNum < 10) {
        let power = n;
        if (power === countDigits(curNum ** power)) {
            numbersCount++;
        }
        curNum++;
    }

    return numbersCount;
}

// Function to Hide Solution
function hideSolution() {
    let txt = "";
    document.getElementById("solution").innerHTML = txt;
}