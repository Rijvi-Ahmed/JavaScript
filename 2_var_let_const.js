//variable in js
/* 1.cannot start with numbers
2.start with letter,_,$
3.case sensitive */

//var,let,const
var a ='Rijvi';
var age=`23"4'8`;//using bactic for print 23"4'8
console.log(a);
var channel;
var city='dhaka'
var mark=23;
console.log(age,channel,mark);

//const always prefer a value which is not changeable
const abc='Rijvi Ahmed';//write way
//abc='Rijvi Ahmed';//error show 
console.log(abc);

//let is used for block statements and create local variable
 {
     let city='Chapai';
     city='nawabganj';
     console.log(city);
 }
 console.log(city);

//insert elements in array using const
 const arr1=[12,3,45,65,6];
 arr1.push(34);
 arr1.pop(45);//follow stack structure
 console.log(arr1);
