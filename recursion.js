/** Recursion */

//  Technique that involves creating function that recall themselves
//  Perform unit of works multiple times

// Imperative Approach(loops)
const countDownFive = (number) => {
    for(let i = number; i > 0; i--) {
        console.log(i);
    }
};

countDownFive(5); // 5, 4, 3, 2, 1

// Recursive approach
const countDownEight = (number) => {
    if (number === 0) {
        return;
    };
    console.log(number);
    countDownEight(number - 1);
};

countDownEight(8); // 8, 7, 6, 5, 4, 3, 2, 1