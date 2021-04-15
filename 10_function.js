console.log('this is tut 10_function');

if(1){
    var i =234;
    console.log(i)
}

console.log(i);

function ui(name)
{
    let i = 9;
    console.log(i);
    return `This is a ${name} ui`;
}

console.log(ui("Rijvi"), i)
const mygreet = function(name, thank='Thank You'){
    let msg = `Happy Birthday ${name} ${thank}!`;
    return msg;

}


let name = 'SkillF';
let name2 ='Rohan';

let val = mygreet(name, 'Thanks a lot');
console.log(val);


const myobj = {
    name: "SkillF",
    game: function(){
        return "GTA";
    }
}
console.log(myobj.game())

arr = ['fruit', 'vegetable', 'furniture'];

arr.forEach(function(element, index, array) {
    console.log(element, index)
});         
