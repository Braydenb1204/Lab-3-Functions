function greet(name = 'Brayden') {
    return `Hello ${name}`;
}
console.log(greet());



function addNumber(num1, num2){
    return num1 + num2
}
let sum = addNumber(13,40);
console.log(sum);



let x = 12;

function changeValue() {
    return x = 15;
}
changeValue();
console.log(x);


function outerFunction(){
let count = 0;
    return function() { 
            count++;
            return count;
        }
    }

let counter = outerFunction();
console.log(counter());
console.log(counter());
console.log(counter());
