// Function to Get Length Information (including Invalid Input)
function getLengthInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the input field
    let num = document.getElementById("mylength").value;
    // Check if input is valid
    if (isNaN(num) || num.length == 0 || num < 1 || num > 21 || (num.length > 1 && num[0] == "0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 1 and 21.  Do not include leading zeros.`
    } else {
        txt += `You have requested ${num}-digit length. <p>`;
        txt += `There are ${powerfulDigitCounts(num)} positive integers of length ${num} and power ${num}.`;
    }

    // Display Information in the Browser
    document.getElementById("lengthinfo").innerHTML = txt;
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
        if (power === countDigits(curNum ** power)) numbersCount++;
        curNum++;
    }

    return numbersCount;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("lengthinfo").innerHTML = txt;
}