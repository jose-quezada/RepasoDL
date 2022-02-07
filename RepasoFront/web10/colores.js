
let botones= document.getElementsByClassName("btn");
let div= document.getElementById("caja");
console.log(botones);

let largo=botones.length;

for(let i = 0 ; i< largo;i++ ){
    console.log(botones[i],"for");  
    botones[i].addEventListener("click", ()=>{
        caja.style.backgroundColor=botones[i].style.backgroundColor;
    });
}

let array= [40,50,55,65,70,30,25,50];
//new Array()-> []
//new Object()-> {}
//json
console.log(array);
array.forEach((ele,index)=>{
    console.log(index);
});

/*
let i=0;
while(i<largo){
    console.log(botones[i], "while");  
    
    /*if(botones[i].style.backgroundColor=="red"){
        break;
    }
    i++;
}*/


/*
botones[0]
botones[1]
botones[2]
botones[3]
botones[4]
*/