//1

let num=[1,3,4,5,8];

let double=n=>n*2;

let doubleArray=num.map(double)
// console.log(doubleArray)


//2

let numbers=[1,2,7,5,3,8];
let evenN=n=>n%2==0;
let even=numbers.filter(evenN);
// console.log(even)

//3

let numberList=[10,30,50,55,70,90];

let greaterFifty=x=>x>=50;

let res=numberList.find(greaterFifty);
// console.log(res)

//4

let names=["Fahim","Nayeem","Noor"];

// let allNames=names.forEach((x)=>console.log("Hello, ",x));

// console.log(allNames)

//5

let ages=[10,16,20,32,52,42,61,66,71,85];

let greaterEighteen=x=>x>18;

let result=ages.filter(greaterEighteen);
// console.log(result)