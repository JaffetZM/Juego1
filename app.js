let numeroSecreto = 0;
let intentos=0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
return;
}
function verificarIntento(){
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
if(numeroDeUsuario === numeroSecreto){
    asignarTextoElemento('p',`acertaste el numero secreto en ${intentos} ${(intentos ===1)? 'vez' : 'veces'}`);
document.getElementById('reiniciar').removeAttribute('disabled');
}else{
    if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p','el numero secreto es menor');

    }else{
        asignarTextoElemento('p','el numero secreto es mayor')
    }
intentos++;
limpiarcaja();
}
  
   return;
}
function limpiarcaja(){
    document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*10)+1;
console.log(numeroGenerado);
console.log(listaNumerosSorteados);
//si ya sorteamos todos los numeros posibles 
if(listaNumerosSorteados.length == numeroMaximo){
asignarTextoElemento('p','ya se asignaron todos los numeros posibles');

    // verifica si el numero esta incluido en la lista 
}else{
if(listaNumerosSorteados.includes(numeroGenerado)){
return generarNumeroSecreto();
}else{
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
}
}
}
function condicionesiniciales(){
    asignarTextoElemento('h1','Juego del número secreto!')
asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos=1;
}
function reiniciarJuego(){
    limpiarcaja();
    condicionesiniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesiniciales();

