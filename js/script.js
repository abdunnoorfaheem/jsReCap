// alert("jsReCap")
// function expression 

let hello=function add(){
    return 0;
}

//arrow function 

let value =(a,b)=> a*b;
// console.log(value(5,4));


let percent=(price,percent)=>{
    
    return (price *percent/100);
}

// console.log(percent(100,25));

//merge Array

let arrayOne=[1,2,3,4,5];
let arrayTwo=[6,7,8,9,10];

console.log(...arrayOne,...arrayTwo);

//Destructuring

let {name,age}={
    name:"fahim",
    age:22
}
// console.log(name)