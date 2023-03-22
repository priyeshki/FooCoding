// 1. Strings!
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString)
console.log(myString.length)
myString = myString.replaceAll(",", " ")
console.log(myString)

//2. Arrays!

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

favoriteAnimals.push("turtle")
console.log(favoriteAnimals)

favoriteAnimals.splice(1, 0, "meerkat")
console.log("the array in my expectaion- ['blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle']")
console.log(favoriteAnimals)

console.log('The array has a length of: ' , favoriteAnimals.length)

favoriteAnimals.splice(3, 1)
console.log(favoriteAnimals)

loc = favoriteAnimals.indexOf('meerkat')
console.log('The item you are looking for is at index: ' ,loc)

//More JavaScript 🎉

//Q1
function sum(a, b, c){
    return a+b+c
}

console.log("sum-", sum(1,2,3))

//Q2
function colorCar(color){
    console.log("a", color, "car")
}

colorCar("red")
//colorCar("blue")

//Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
let myCar = {
    "name": "Volvo",
    "wheel": 4,
    "seats": 8,
}
console.log(myCar)

//Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. 
//And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

function vehicleType(color, code){
    if (code == 1){
        console.log("a", color, "car")
    }
    if (code == 2){
        console.log("a", color, "motorbike")
    }
}

vehicleType("red", 1)
vehicleType("blue", 2)

//Can you write the following without the if statement, but with just as a single line with console.log(...);?
console.log((3==3)?"yes":"no")


//Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

function vehicle(color, code, age){
    let use = age<1? "new" : "used"
    if (code == 1 ){
        console.log("a", color,use, "car")
    }
    if (code == 2 ){
        console.log("a", color,use, "motorbike")
    }
    
}
vehicle("blue", 1, 5)
//vehicle("red", 2, 0)

//Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

let vehicles = ["motorbike", "caravan", "bike", "car"]

console.log(vehicles[2])

//Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
function vehicle_updated(vehicles, color, position, age){
    let use = age<1? "new" : "used"
    console.log("a", color, use, vehicles[position])
    
}
vehicle_updated(vehicles, "green", 2, 0)

//Use the list of vehicles to write an advertisement. So that it prints something like: 
//"Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
function advertisement(vehicles){
    let ad = ""

    for(i=0; i < vehicles.length; i++){
        ad = ad + ", " + (vehicles[i].endsWith("s") ? vehicles[i] : vehicles[i] + "s")
    }

    ad = ad.replace(", ", " ")
    ad = "Amazing Joe's Garage, we service " + ad + "."
    return ad

}
console.log( advertisement(vehicles))

//What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
vehicles.push("jeep")
console.log( advertisement(vehicles))

//Create an empty object.

let obj = {}
console.log("empty object", obj)

//Create an object that contains the teachers that you have had so far for the different modules.

let teachers = {
    "Tommy":"",
    "Sahin": ""
}
console.log("teachers object", teachers)

//Add a property to the object you just created that contains the languages that they have taught you.
teachers['Tommy'] = 'HTML, CSS';
teachers['Sahin'] = 'JavaScript';
console.log("teachers object--", teachers)

//Write some code to test two arrays for equality using == and ===. Test the following:
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);

//Take a look at the following code:
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
console.log('value of o3 before changin o2 value', o3);
// Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
o2 = { foo: 'changed-02' };
console.log('new value of o2', o2);
console.log(
  'value of o3 after changin o2 value',
  o3,
  'the value of o3 is not changed'
);
o1 = { foo: 'changed-01' };
console.log('new value of o1', o1);
console.log(
  'value of o3 after changin o1 value',
  o3,
  'the value of o3 is not changed'
);

//What does the following code return? (And why?)
let bar = 42;
console.log('"let bar = 42", then what "typeof typeof bar" will return');
console.log(
  'typeof operator always returns a string indicating the type of its operand. In this case, the operand is the string "number", so the result is',
  typeof typeof bar
);






