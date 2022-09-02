// scripts para incluir

// capturar botones
var botonEncriptar= document.querySelector("#bot-encti");
var botonDesencrip= document.querySelector("#bot-desen");
var botonCopiartex= document.querySelector("#bot-copia");

// funcion encriptar
function encriptar(){
  //capturar textarea
  var texre= document.querySelector("#texre");
  var textr= texre.value;
  var textEncriptado= "";
  
  // inspeccionar
  for(n=0; n<textr.length; n++){
    if(textr[n]=="a"){
      textEncriptado= textEncriptado + "ai";
    }
    else if(textr[n]=="e"){
      textEncriptado= textEncriptado + "enter";
    }
    else if(textr[n]=="i"){
      textEncriptado= textEncriptado + "imes";
    }
    else if(textr[n]=="o"){
      textEncriptado= textEncriptado + "ober";
    }
    else if(textr[n]=="u"){
      textEncriptado= textEncriptado + "ufat";
    }
    else{
      textEncriptado= textEncriptado + textr[n];
    }
  }

  //resultados
  document.getElementById("men-inicio").style.display= "none";
  document.getElementById("men-result").textContent= textEncriptado;
  document.getElementById("men-result").style.display= "block";
  document.getElementById("bot-copia").style.display= "block";
}

// funcion desencriptar
function desencriptar(){
  //capturar textarea
  var texre= document.querySelector("#texre");
  var textr= texre.value;
  var textDesencript= "";
  
  // inspeccionar
  for(n=0; n<textr.length; n++){
    if(textr[n]=="a"){
      textDesencript= textDesencript + "a";
      n= n+1;
    }
    else if(textr[n]=="e"){
      textDesencript= textDesencript + "e";
      n= n+4;
    }
    else if(textr[n]=="i"){
      textDesencript= textDesencript + "i";
      n= n+3;
    }
    else if(textr[n]=="o"){
      textDesencript= textDesencript + "o";
      n= n+3;
    }
    else if(textr[n]=="u"){
      textDesencript= textDesencript + "u";
      n= n+3;
    }
    else{
      textDesencript= textDesencript + textr[n];
    }
  }

  //resultados
  document.getElementById("men-inicio").style.display= "none";
  document.getElementById("men-result").textContent= textDesencript;
  document.getElementById("men-result").style.display= "block";
  document.getElementById("bot-copia").style.display= "block";
}

// funcion copear
function copear(){
  //var copre= document.querySelector("#men-result");
  //var optre= document.getElementById('men-result');
  //var resco= optre.innerHTML;

  //document.execCommand(resco);
  //alert(resco);
  var content= document.getElementById('men-result');
    
    content.select();
    document.execCommand('copy');
}

// llamar funciones
botonEncriptar.onclick= encriptar;
botonDesencrip.onclick= desencriptar;
botonCopiartex.onclick= copear;