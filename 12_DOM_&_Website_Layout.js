console.log('Welcome to  12_DOM_&_Website_Layout');
let a = document;
a = document.all;
a = document.body;
a = document.forms[0];
Array.from(a).forEach(function(element){
    console.log(element);
})
a = document.links[0];
// use document.images and document.scripts and print the list of images and scripts on an html page
console.log(a);
