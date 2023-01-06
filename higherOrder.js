/** Higher Order */

//  Manipulate other functions
//  Take functions as arguments or return functions or both

const invokeIf = (condition, fnTrue, fnFalse) => condition ? fnTrue() : fnFalse();

const showWelcome = () => console.log("Welcome!!!");
const showUnauthorized = () => console.log("Unauthorized!!!");

invokeIf(true, showWelcome, showUnauthorized); // "Welcome!!!" 
invokeIf(false, showWelcome, showUnauthorized); // "Unauthorized!"

// Example
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const filterFunction = (numArr, callback) => {
    const filteredArr = [];
    for(let i = 0; i < numArr.length; i++) {
        callback(numArr[i]) ? filteredArr.push(numArr[i]) : null
    };
    return filteredArr;
};

// filtering odd numbers
const isOdd = (x) => {
    return x % 2 != 0;
}

// filtering even numbers
const isEven = (x) => {
    return x % 2 === 0;
};

console.log(filterFunction(numArr, isOdd)); // 1, 3, 5, 7, 9, 11
console.log(filterFunction(numArr, isEven)); // 2, 4, 6, 8, 10