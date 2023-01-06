/** Type of Programming Paradigms */

//  Programming paradigms => Imperative paradigm & Declarative paradigm
//  Imperative paradigm => Procedural programming, Structured programming & Object-oriented programming
//  Declarative paradigm => Functional programming, Logic programming


/** Imperative Programming */ 

//  The oldest and most baisc programming approach
//  It is concerned with only how to achieve results with code
//  Code describes a step-b-step process for a execution

const exampleOne = "Mount Everest is the highest mountain";
let urlFriendlyOne = "";

for (let i = 0; i < exampleOne.length; i++) {
    if (exampleOne[i] === " ") {
        urlFriendlyOne += "-";
    } else {
        urlFriendlyOne += exampleOne[i];
    }
};

console.log(urlFriendlyOne); // Mount-Everest-is-the-highest-mountain

/** Declarative Programming */

//  Prioritize describing what should happen over defining how it should happen
//  Develop more expressive & explicit code

const exampleTwo = "Mount Everest is the highest mountain";
let urlFriendlyTwo = exampleOne.replace(/ /g, "-");

console.log(urlFriendlyTwo); // Mount-Everest-is-the-highest-mountain