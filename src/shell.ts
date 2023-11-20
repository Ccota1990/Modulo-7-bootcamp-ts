import { mePlanto, nuevaPartida, pideCarta } from "./ui";

export const botonesPartida = () =>{
    
    const botonPedirCarta = document.getElementById ("pedirCarta")
    if(botonPedirCarta !== null && botonPedirCarta !== undefined && botonPedirCarta instanceof HTMLButtonElement){
    botonPedirCarta.addEventListener("click", pideCarta); 
    };

    const botonMePlanto =document.getElementById("meplanto")
    if(botonMePlanto !== null && botonMePlanto !== undefined && botonMePlanto instanceof HTMLButtonElement){
    botonMePlanto.addEventListener("click", mePlanto);
    };

    const botonNuevaPartida =document.getElementById("nuevaPartida")
    if(botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement){
    botonNuevaPartida.addEventListener("click", nuevaPartida);
    };
};

document.addEventListener("DOMContentLoaded", botonesPartida);

