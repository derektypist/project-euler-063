// Function to Get Length Information (including Invalid Input)
function getLengthInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the input field
    let num = document.getElementById("mylength").value;
    // Check if input is valid
    if (isNaN(num) || num.length==0 || num<1 || num>21 || (num.length>1 && num[0]=="0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 1 and 21.  Do not include leading zeros.`
    } else {
        txt += `You have requested ${num}-digit length. <p>`;
        txt += `There are ${powerfulDigitCounts(num)} positive integers of length ${num} and power ${num}.`;
    }

    // Display Information in the Browser
    document.getElementById("lengthinfo").innerHTML = txt;
}