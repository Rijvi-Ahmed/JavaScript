console.log("This is tutorial Asynchronous_Programming");

setTimeout(() => {
    for (let index = 0; index < 12; index++) {
        const element = index;
        console.log("This is index number" + index);
        
    }
}, 100);



console.log('done printing');
