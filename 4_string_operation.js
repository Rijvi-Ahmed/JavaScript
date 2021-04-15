//stirng concatenation
let var1="Rijvi";
let var2="Ahmed";
console.log(var1+' '+var2);

let html;
html= "<h>Rijvi</h>" +"<p>Ahmed</p>";
html=html.concat('Akash');
console.log(html.toLocaleLowerCase());
console.log(html.toLocaleUpperCase());
console.log(html[1]);//value return of index 1
console.log(html.indexOf('<'));//index value return
console.log(html.lastIndexOf('<'));
console.log(html.charAt(4));
console.log(html.endsWith('Akash'));//true return
console.log(html.includes('fg'));//false return 
console.log(html.substring(2,5));//n-1 th can include(1-4) output >Ri
console.log(html.slice(1,5));//output h>Ri
console.log(html.slice(5));//output jvi</h><p>Ahmed</p>Akash
console.log(html.substring(-4));//full string return
console.log(html.slice(-5));//output Akash
console.log(html.split('A'));
console.log(html.replace('Ahmed', 'Rahman'));//output <h>Rijvi</h><p>Rahman</p>Akash


//html code writing
let color1='Red\'s';//for Red's
let color2='Yellow';
let myHtml=`Hello ${var1}
            <h1>This is a very beautiful ${color1} & ${color2} colors`;
document.body.innerHTML=myHtml;