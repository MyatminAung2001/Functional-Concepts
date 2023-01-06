/** Immutability */

//  To be immutable is to be unchangeable
//  Instead of changing the original data structures, we build changed copies of those and use them instead.
//  In JavaScript String and Numbers are immutable data types. 
//  In JavaScript Arrays and Objects are not immutable.

/** Object */ 
let color_lawn = { 
    title: "lawn",
    color: "#00FF00", 
    rating: 0 
};

const rateColor = (color, rating) => {
    color.rating = rating;
    return color;
};

console.log(rateColor(color_lawn, 5).rating); // 5
console.log(color_lawn.rating); // 5

// rateColor function that does not harm original
const immutableRateColor = (color, rating) => {
    return Object.assign({}, color, { rating });
};

// using spread operator
// wrap the returned object in parentheses cuz arrow can’t just point to an object’s curly braces.
const spreadRateColor = (color, rating) => ({
    ...color, rating
})

console.log(immutableRateColor(color_lawn, 5).rating); // 5
console.log(color_lawn.rating); // 0

// a newly rated color object without having to change the original.

/** Array */
let studentList = [
    { name: "rand" },
    { name: "alex" },
    { name: "julie" },
];

// array.push is not an immutable function
// addName function changes the original array by adding another name
const addName = (name, lists) => {
    lists.push({ name: name });
    return lists
};

console.log(addName("rey", studentList).length); // 4
console.log(studentList.length); // 4

// to keep original array immutable, use array.concat instead
// concat creates a new array by merging existing arrays
const immutableStudentLists = (name, lists) => lists.concat({ name });

// using spread operator to concatenate arrays in the same way
const spreadFunction = (name, lists) => [...lists, { name }]

console.log(immutableStudentLists("joy", studentList).length); // 4
console.log(studentList.length); // 3
