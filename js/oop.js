const output = document.getElementById('output');
const output2 = document.getElementById('output2');

/* STEP 1a: Create a new object using a regular function */
function createNewPerson(name) {
    let obj = {};
    obj.name = name;
    obj.greetings = function () {
        alert(`Hey, this is ${this.name}.`);
    };
    return obj;
}

/* STEP 1b: Use the console to create a new person, and then invoke the function represented by .greeting() */
let person1 = createNewPerson("P1");

/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions - 
rewrite the above function, without returning anything. Capitalize the name of the function. */
function Person(firstName, lastName, age, interests) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.interests = interests;
    this.bio = function () {
        return `The interests of ${this.firstName} ${this.lastName}, of age ${this.age} are ${this.interests}.`;
    }
}

/* STEP 2b: Use the console to create a couple of different people, using the 'new' keyword, 
and again invoking the .greeting() method for each person */

/* STEP 3a: Build the complete constructor for the object Person (comment out the above function first).
 Include name (first and last), age, gender, interests, bio (function), and greeting (function). */

/* STEP 3b: Instantiate a new Person based on the above constructor */
let person2 = new Person("P1", "LP1", 18, ["swimming", "reading", "dancing"]);

/* STEP 3c: Attempt to access the various properties of person1 using the console. */
// person2['age']
// person2.interests[1]
// person2.bio()
output.textContent = person2.bio();

/* STEP 4a: Alternatively, you can use the Object() constructor to create an object. eg. car*/
let car = new Object();

/* STEP 4b: Once 'car' is created, add various properties and methods… */
car.brand = "Honda";
car.model = "Civic";
car.fun = function () {
    alert(`A car of brand: ${this.brand} and model: ${this.model}.`);
}

/* STEP 4c: Change some of the properties of 'car' in the console, then invoke the car.fun() function */

/* STEP 5a: Yet another approach is to use the create() method. 
Let's see how the above car object can be used to create another object */
let anotherCar = Object.create(car);
anotherCar.model = "CRV";

/* STEP 5b: Output to the paragraph anotherCar.brand - you will see that it has retained the properties of the original object. */

// That's it! Now on to Lab 3...
// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/
// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too
function Hamburger(bunType, vegetables, cheeses, sauce, pattyType, numOfPatties) {
    // bun type (white, wheat, etc)
    this.bunType = bunType;
    // make vegetables, cheeses, and sauce arrays into a toppings object
    this.toppings = {
        vegetables: vegetables,
        cheeses: cheeses,
        sauce: sauce
    };
    // patty type (beef, chicken, vegetarian, etc)
    this.pattyType = pattyType;
    // number of patties
    this.numOfPatties = numOfPatties;
    // describe the hamburger
    this.describe = function () {
        // create a string to hold the description
        var returnStr = "";
        // add all of the information to the string
        // I used ? : to decide if patty should be patty or patties
        returnStr += `This is a hamburger on a ${this.bunType} bun with ${this.numOfPatties} ${this.pattyType} ${numOfPatties === 1 ? "patty" : "patties"}.`;
        returnStr += " It has the following toppings:";
        returnStr += " \n\n      Vegetables \n-";
        returnStr += this.toppings.vegetables.join("\n-");
        returnStr += " \n\n      Cheeses \n-";
        returnStr += this.toppings.cheeses.join("\n-");
        returnStr += " \n\n      Sauces \n-";
        returnStr += this.toppings.sauce.join("\n-");
        // return the description
        return returnStr;

        
    }

}
// create a new hamburger
let hamburger1 = new Hamburger("white", ["lettuce", "tomato", "onion"], ["cheddar"], ["ketchup", "mustard"], "beef", 2);
// output the description
console.log(hamburger1.describe());
// create another hamburger
let hamburger2 = new Hamburger("whole grain", ["spinach", "cucumber", "avocado"], ["swiss", "mozzarella"], ["mayo", "bbq sauce"], "chicken", 1);
// log that as well
console.log(hamburger2.describe());
// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS