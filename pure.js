/** Pure Function */

//  Free from side-effects
//  Returned a value that is computed based on its arguments
//  Take at least one argument and always return a value or another function
//  They treat their arguments as immutable data

/** Side Effects */
// Making an HTTP request
// Mutating data
// Printing to a screen or console
// DOM Query/Manipulation
// Math.random()
// Getting the current time

const mySelf = {
    name: "Myatmin Aung",
    canRead: false,
    canWrite: false
};

// Impure Function
const impureFn = () => {
    mySelf.canRead = true;
    mySelf.canWrite = true
    return mySelf;
};

// impureFn is not pure function, it doesn't take any args or return a value or a function
// also change the variables outside of its scope
impureFn();
console.log(impureFn(mySelf)); // { name: 'Myatmin Aung', canRead: true, canWrite: true }

// Pure Function
const pureFn = (person) => ({
    ...person,
    canRead: true,
    canWrite: true
});

// pureFn computes a value based on argument and that was sent to => person
// it returns a new person object without mutating argument sent to it and therefore has no side effects

console.log(pureFn(mySelf)); // { name: 'Myatmin Aung', canRead: true, canWrite: true }
console.log(mySelf); // { name: 'Myatmin Aung', canRead: false, canWrite: false }