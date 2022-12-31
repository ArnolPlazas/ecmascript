
// declare, assign and reassign with var let and const
var lastName = 'David';
lastName = 'Oscar';
console.log(lastName); // Oscar

let fruit = 'Apple'
fruit = 'Kiwi'
console.log(fruit); // Kiwi

const animal = 'Dog';
animal = 'Cat'
console.log(animal); // TypeError: Assignment to constant variable.

// scope with var let and const

const fruits = () =>{
    if(true){
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
    }
    console.log(fruit1); // Apple -> function scope
    console.log(fruit2); // ReferenceError: fruit2 is not defined -> block scope
    console.log(fruit3); // ReferenceError: fruit3 is not defined -> block scope
}

fruits();

