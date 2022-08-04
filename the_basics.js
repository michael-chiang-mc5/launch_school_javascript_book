// 1. Concatenate two or more strings, one with your first name and one with your last, to create a string with your full name as its value. For example, if your name is John Doe, think about how you can put 'John' and 'Doe' together to get 'John Doe'.
let firstName = 'Michael';
let lastName = 'Chiang';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

// 2. Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:
let number = 4936
let digit1 = Math.floor(number % 10)
let digit10 = Math.floor((number / 10**1) % 10)
let digit100 = Math.floor((number / 10**2) % 10)
let digit1000 = Math.floor((number / 10**3) % 10)

console.log(digit1, digit10, digit100, digit1000)

// 3. Identify the data type for each of the following values:
console.log(typeof 'true') // string
console.log(typeof false)  // bool
console.log(typeof 1.5)   // number
console.log(typeof 2)   // number 
console.log(typeof undefined)  // undefined
console.log(typeof { foo: 'bar' }) // object

// 4. Explain why this code logs '510' instead of 15.
console.log('5' + 10);
// 10 is cast to a string, then concatenated to string '5'

// 5. Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.
console.log(parseInt('5') + 10);

// 6. Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console:
console.log(`The value of 5 + 10 is ${Number(5)+10}.`)

// 7. Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? For example:
let foo = ['a', 'b', 'c'];
console.log(foo.length);  
console.log(foo[3]);    
// No error, out of bounds array returns undefined

// 8. Create an array named names that contains a list of pet names. For instance:
let names = ['asta', 'butterschotch', 'pudding', 'neptune', 'darwin']

// 9. Create an object named pets that contains a list of pet names and the type of animal. For instance:
let pets = {'asta': 'dog',
            'butterscotch':'cat',
            'pudding': 'cat',
            'neptune': 'fish',
            'darwin' : 'lizard'            
            }

// 10. What value does the following expression evaluate to?
console.log('foo' === 'Foo')
// false

// 11. What value does the following expression evaluate to?
console.log(parseInt('3.1415'))
// 3

// 12. What value does the following expression evaluate to?
console.log('12' < '9')
// true