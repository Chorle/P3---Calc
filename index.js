/* -------------------------------
let firstName =  'Carlos';
let lastName = 'Denogens';
let fullName = firstName + ' ' + lastName;

console.log(fullName);


let theName = 'Alyx';
let greeting = 'Hi there';

function greetAlyx() {
    console.log(greeting + ', ' + theName + '!');
}

greetAlyx();
------------------------------- */


/* ----------------------------
let myPoints = 3;

function add3Points() {
    myPoints += 3;
}

function remove1Point() {
    myPoints -= 1;
}

remove1Point();
remove1Point();
add3Points();
add3Points();
add3Points();

console.log(myPoints);
 ------------------------------ */


/* ----------------------------
let buttonEl = document.querySelector('button');
let errorEl = document.getElementById('error');


buttonEl.addEventListener('click', function() {
    errorEl.innerHTML = 'Something went wrong, try again!';
})
---------------------------- */

let sumEl = document.getElementById('sum-el');
let addEl = document.getElementById('add-el');
let subEl = document.getElementById('sub-el');
let divEl = document.getElementById('div-el');
let mulEl = document.getElementById('mul-el');

let num1 = 8;
let num2 = 2;
document.getElementById('num1-el').innerHTML = num1;
document.getElementById('num2-el').innerHTML = num2;

addEl.addEventListener('click', function() {
    sumEl.innerHTML = 'Sum: ';
    sumEl.innerHTML += num1 + num2;
});

subEl.addEventListener('click', function() {
    sumEl.innerHTML = 'Sum: ';
    sumEl.innerHTML += num1 - num2;
});

divEl.addEventListener('click', function() {
    sumEl.innerHTML = 'Sum: ';
    sumEl.innerHTML += num1 / num2;
});

mulEl.addEventListener('click', function() {
    sumEl.innerHTML = 'Sum: ';
    sumEl.innerHTML += num1 * num2;
});