console.log("This is tutorial of prototype inheritance");

const proto = {
    slogan: function () {
        return `This company is the best`;
    },
    changeName: function (newName) {
        this.name = newName
    }
}

// This creates harry object
let harry = Object.create(proto);
harry.name = "Rijvi";
harry.role = "Programmer";
// harry.changeName("Akash")
// console.log(Rijvi)

// This also creates harry object
const harry1 = Object.create(proto, {
    name: { value: "Rijvi", writable: true },
    role: { value: "Programmer" },
});
harry1.changeName("Akash")
// console.log(akash)


// Employee constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan
Employee.prototype.slogan = function () {
    return `This company is the best. Regards, ${this.name}`;
}

// Create an object from this constructor now
let harryObj = new Employee("Rijvi", 345099, 87);
console.log(harryObj.slogan())

// Programmer
function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let mim = new Programmer("Mim", 2, 0, "Javascript");
console.log(mim);


