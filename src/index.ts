import {planet, BootcampStudent, birthday} from './script'



console.log("Hello World");

//variables
let names:string = "Momo";
let likesGames: boolean = true;
let age: number = 31;

let students: string[] = ["Kat","Steve","Logan","Momo"];
let hikes: boolean[] = [true,false,false,true,false];
let evenNumbers: number[] = [2,4,6,8,10];

students.push("DJ");

//evenNumbers.push("12"); /// invalid value for number array

likesGames = false;

function sayHello(name: string): string {
    return "Hello " + name;
}
 function sayHi(name: string): void {
     console.log("Hi " + name);
 }
// Arrow function //
const highFive = (name: string): void => {
    console.log("High-fived " + name);
}

function calculateChange(total:number, payment:number): number {
    return payment - total;
}

/// Sample function passing 2 variable in parameters ///
function calculateTotal(listOfNumbers: number[]): number {
    let total:number = 0;
    for (let i = 0; i<listOfNumbers.length; i++) {
        total += listOfNumbers[i];
    }
    return total;
}

///
function add1(numOne:number, numTwo: number = 0): number {
    return numOne + numTwo;
}

function add2(num1:number, num2: number = 1): number {
    return num1 + num2;
}

///call function add1
console.log(add1(1,7));
console.log(add1(5));
//// call function add2 
console.log(add2(1,7));
console.log(add2(5));

function getAreaOfCircle(radius: number): number {
    return Math.PI*radius*radius;
}
console.log(getAreaOfCircle(6));

function greeter(name:string):void {
    console.log("Hi " + name);

}
/////////// Defining an interface ///////////////////////
interface Person {
    firstname: string
    lastName: string;
}
///// using an interface to create a variable
function greeter1(person: Person): void {
    console.log("Hi " + person.firstname);
}
let myPerson: Person = {firstname: "Momo", lastName: "Miller"};

console.log(greeter1(myPerson));

interface Pet {
    breed: string;
    name: string;
    age: number;
}

let jax: Pet = {breed: "Corgi", name: "Jax", age: 1};
let crosby: Pet = {breed: "Corgi", name: "Crosby", age: 12};
/////

interface: Car {
    make: string;
    model:string;
    color:string;
    }

    let myCar: Car = {make: "Toyota", nodel: "Prius",color: "black"}
    
    function myCar(car: Car): string {
       console.log("My" + make + model + "is" + color);
    
    }

// greeter(jax); // invalid type

//let nameOutput: number = sayHello("Jesekia") //invalid value for number variable.

console.log(sayHello("Santa"));
//console.log(sayHi("there!"));
sayHi("there!");
highFive("Jax");

console.log(planet);
