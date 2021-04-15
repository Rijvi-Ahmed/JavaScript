let marks=[23,45,67,89,23];
const fruits=["orange", "apple","mango"];
const mixed=['str', 45, [3,4]];
console.log(marks);
console.log(mixed[1]);
console.log(mixed.length);

//constructor through array
const arr = new Array(12, 34, 56, 'rijvi');
console.log(arr);

console.log(Array.isArray(arr));//return true/false of existing array

//indexof method
let value=marks.indexOf(23);
console.log(value);

//modifying array
marks.push(30);//add at ending 
marks.unshift(39);//add in starting
marks.pop()//remove at ends
marks.shift();
marks.splice(1,2);//1 index elements to number of 2 elements are remove
marks.reverse();
let marks2=[34,23,45];
marks=marks.concat(marks2);
console.log(marks);


//object
let myOb={
    name: "Rijvi",
    age: 23,
    isActive: true,
    marks:[3,2,4,6]
}
console.log(myOb);
console.log(myOb.age);

