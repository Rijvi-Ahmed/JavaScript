console.log("This is tutorial of object prototypes");

// Object literal : Object.prototype
let obj = {
    name: "Rijvi",
    channel: "Code With Rijvi",
    address: "World"
}

function Obj(givenName){
    this.name = givenName
}

Obj.prototype.getName = function (){
    return this.name;
}

Obj.prototype.setName = function (newName){
  this.name = newName;
}

let obj2 = new Obj("Akash");
console.log(obj2);
 