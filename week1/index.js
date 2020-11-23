function centuryFromYear(year) {
    return Math.ceil(year / 100);
}

console.log(centuryFromYear(1201));

function checkPalindrome(inputString) {
    let length = inputString.length;
    for (let i = 0; i < inputString.length / 2; i++) {
        const char = inputString[i];
        if (char !== inputString[length - i - 1]) return false;
    }
    return true;
}

console.log(checkPalindrome('abccba'));

function maxAdjacentElementsProduct(inputArray) {
    if (inputArray.length <= 1) return null;
    let max = inputArray[0] * inputArray[1];
    for (let i = 1; i < inputArray.length - 1; i++) {
        const elem1 = inputArray[i];
        const elem2 = inputArray[i + 1];
        const product = elem1 * elem2;
        if (product > max) max = product;
    }
    return max;
}

console.log(maxAdjacentElementsProduct([3, 6, -2, -5, 7, 3]));

function oddElements(inputArray) {
    return inputArray.filter(elem => elem % 2 === 1);
}

console.log(oddElements([3, 6, -2, -5, 7, 3]));
