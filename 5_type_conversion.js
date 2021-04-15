//Type Conversion

let myVar;
myVar=String(30);
console.log(myVar,(typeof myVar));

let boolVar = String(true);
console.log(boolVar,(typeof boolVar));

let date= String(new Date());
console.log(date,(typeof date));

let arr=[1,2,3,4,5];
console.log(arr.length,(typeof arr));//output 5, object

let arr2=String([1,2,3,4,5]);
console.log(arr2.length,(typeof arr2));//output 9, string

let i=8;
console.log(i.toString());

//number convert
let b =Number("1234");
b=Number("123f4");//print not a number(NaN)
console.log(b,(typeof b));

let number= parseInt('34.89');//output 34
console.log(number.toFixed(3),(typeof number));//outut 34.000

//Type coercion
let mystr="687";
let myNum=34;
console.log(mystr+myNum);//output 68734 34 is converted by string

let mystr1=Number("687");
let myNum1=34;
console.log(mystr1+myNum1);//add 721