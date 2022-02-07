
let btn = document.getElementById("btnUF");
let caja= document.getElementById("resultado");
btn.addEventListener("click", traerColores);
/*btn.click= function(){

}*/
function traerUF(){
//XMLHTTPRequest -> fetch
//ActiveX

    let xhr= new XMLHttpRequest();
    xhr.onreadystatechange= function(){
        //readystate 0,1,2,3,4
        //0 no se ha iniciado
        //1 cliente envia los datos al servidor
        //2 el servidor recibe la informacion
        //3 el servidor enviando la respuesta
        //4 final el cliente recibe la respuesta del servidor
        if(xhr.readyState===4 && xhr.status===200){
            console.log("termine");
            let respuesta= xhr.responseText;
            let json = JSON.parse(respuesta);
            console.log(json , json.UFs[0].Valor);
            caja.innerHTML=json.UFs[0].Valor;
        }
        else if(xhr.readyState===4 ){
            console.log("error")
        }
    }
    xhr.open("get", "https://api.cmfchile.cl/api-sbifv3/recursos_api/uf/?apikey=a6073621b6b49dffb8bcd2fe83dc304888a6766b&formato=json")
    xhr.send()

}



function traerColores(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange= function(){
        if(xhr.readyState===4 && xhr.status===200){
            caja.innerHTML=xhr.responseText;
        }
    }
    xhr.open("get","colores.html")
    xhr.send();
}

/*
$.ajax({
    url:'https://rickandmortyapi.com/api/character/6',
    method:'get',
    success: function(res){

    },
    error:function(e){

    },
    complete:function(){

    }
})
*/