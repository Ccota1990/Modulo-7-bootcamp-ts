import{
    puntuacionInicial,
    resetPuntuacion,
    sumarPuntuacion,
} from "./modelo"

import { dameCarta } from "./motor";


export const muestraPuntuacion = () => {
    const puntuacion = document.getElementById ("puntos")
    if(puntuacion !== null && puntuacion !== undefined && puntuacion instanceof HTMLElement) {
        puntuacion.innerHTML = `Tu puntuación es ${puntuacionInicial.toString()}`
    }
};

export const pideCarta = () => {
    const carta = dameCarta();
    const url = getUrl(carta);
    muestraCarta(url);
    sumarPuntuacion(carta);
    muestraPuntuacion();
    comprobarPuntuacion();

};

const getUrl = (carta: number) :string =>{
    switch(carta){
        case 1: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
             
        case 2: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
            
        case 3: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
             
        case 4: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
             
        case 5: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
             
        case 6: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
             
        case 7: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
             
        case 10: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
             
        case 11: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
             
        case 12: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
         
        default: return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"; 
    }
};

export const muestraCarta = (url: string) =>{
    const imagenCarta = document.getElementById("carta")
    if(imagenCarta !== null && imagenCarta !== undefined && imagenCarta instanceof HTMLImageElement){
        imagenCarta.src = url
    }
};


export const comprobarPuntuacion =() =>{
    if(puntuacionInicial>7.5){
        acabarPartida("¡¡Game over!!")
    }
    
    if(puntuacionInicial===7.5){
        acabarPartida("¡Lo has clavado! ¡Enhorabuena!")
    }
    
};
const acabarPartida = (mensaje : string) => {
    let boton = document.getElementById("pedirCarta")
    if(boton  !== null && boton!== undefined && boton instanceof HTMLButtonElement){
        boton.disabled = true 
    };
    const resultado = document.getElementById ("resultado")
    if(resultado !== null && resultado !== undefined && resultado instanceof HTMLElement) {
        resultado.innerHTML = mensaje
    }
    modificarEstadoBoton("visible")
    
};

const resultados = () => {
    const resultado = document.getElementById ("resultado")
        if(resultado!== null && resultado !== undefined && resultado instanceof HTMLElement){
            if(puntuacionInicial<4){
                resultado.innerHTML = "Has sido muy conservador"
            }
            if(puntuacionInicial===5) {
                resultado.innerHTML = "Te ha entrado el canguelo eh?"
            }
            if(puntuacionInicial>=6 && puntuacionInicial<=7){
                resultado.innerHTML = "Casi casi..."
            }
            if(puntuacionInicial===7.5){
                resultado.innerHTML = "¡Lo has clavado! ¡Enhorabuena!"
            }
};
};
const deshabilitarBoton = () =>{
    let boton = document.getElementById("pedirCarta")
    if(boton !== null && boton !== undefined && boton instanceof HTMLButtonElement){
        boton.disabled = true 
    };
};

const modificarEstadoBoton = (estado: string) =>{
    const botonNuevaPartida = document.getElementById("nuevaPartida")
    if(botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement){
    botonNuevaPartida.style.visibility=estado;
    };
};

export const mePlanto = () => {
    deshabilitarBoton();
    resultados();
    modificarEstadoBoton("visible"); 
};

const resetCarta = () => {
    let cartaElement = document.getElementById("carta")
    if(cartaElement !== null && cartaElement !== undefined && cartaElement instanceof HTMLImageElement){
        cartaElement.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
    }

};

const modificarBotonPedirCarta = () =>{
    let botonPedirCarta = document.getElementById("pedirCarta")
    if(botonPedirCarta !== null && botonPedirCarta !== undefined && botonPedirCarta instanceof HTMLButtonElement){
        botonPedirCarta.disabled=false
    }
};

const resetMensaje =() =>{
    let resultado = document.getElementById ("resultado")
    if(resultado !== null && resultado !== undefined && resultado instanceof HTMLElement){
       resultado.innerHTML = ""
    }
};


export const nuevaPartida = () =>{ 
    resetPuntuacion()
    resetCarta()
    modificarBotonPedirCarta()
    modificarEstadoBoton("hidden")
    resultados()
    resetMensaje()
};

