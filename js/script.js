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

// console.log(...arrayOne,...arrayTwo);

//Destructuring

let {name,age}={
    name:"fahim",
    age:22
}
// console.log(name)
//array----> for of
//object----> for in
//map 

let num=[4,5,6,7,12];
let double=[];

for(let number of num){
    let output=number*2;
    // console.log(output);
    
}

//callback function 
//A callback is a function passed as an argument to another function This technique allows a function to call another function A callback function can run after another function has finished 

//map,filter, find ,reduce

// function min(nums) { return Math.min(nums) }
// console.log(min( [1,3,2 ]));

// const cube=x=> x*x*x; 
// console.log(cube(2))
// const [a, b] = [1,2,3,4,45,5]; 
// console.log(a+b);

// const nums = [1,2,3,4,5];
// let output = nums.filter(n => n%2);
// console.log(output);

const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}
const {price}=product;
console.log(price)