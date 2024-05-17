import{
    obtenerValorCarta,
    puntuacionInicial,
    resetPuntuacion,
    sumarPuntuacion,   
} from "./modelo"
import { dameCarta, obtenerNumeroAlearorio } from "./motor";




export const muestraPuntuacion = () => {
    const puntuacion = document.getElementById ("puntos")
    if(puntuacion !== null && puntuacion !== undefined && puntuacion instanceof HTMLElement) {
        puntuacion.innerHTML = `Tu puntuación es ${puntuacionInicial.toString()}`
    }
};


export const getUrl = (carta: number) :string =>{
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


export const comprobarPuntuacion =(puntuacionInicial: number) =>{
    if(puntuacionInicial>7.5){
        acabarPartida("¡¡Game over!!")
    }
    
    if(puntuacionInicial===7.5){
        acabarPartida("¡Lo has clavado! ¡Enhorabuena!")
    }  
    return null  
};

const acabarPartida = (mensaje : string) => {
    modificarBotonPedirCarta(true);
    const resultado = document.getElementById ("resultado")
    if(resultado !== null && resultado !== undefined && resultado instanceof HTMLElement) {
        resultado.innerHTML = mensaje
    }
    modificarEstadoBoton("visible")
    
};

export const pintarMensaje = (mensaje : string) => {
    const resultado = document.getElementById ("resultado")
    if(resultado!== null && resultado !== undefined && resultado instanceof HTMLDivElement){
        resultado.innerHTML = mensaje;
    }
};

export const resultados = (puntuacionInicial: number) => {
    
    if(puntuacionInicial<=4.5){
        return "Has sido muy conservador"
    }
    if(puntuacionInicial===5) {
        return "Te ha entrado el canguelo eh?"
    }
    if(puntuacionInicial >5 && puntuacionInicial<=7){
        return "Casi casi..."
    }
    if(puntuacionInicial===7.5){
        return "¡Lo has clavado! ¡Enhorabuena!"
    } 
    return "No se que ha pasado"
};

const modificarBotonPedirCarta = (estado: boolean) =>{
    let botonPedirCarta = document.getElementById("pedirCarta")
    if(botonPedirCarta !== null && botonPedirCarta !== undefined && botonPedirCarta instanceof HTMLButtonElement){
        botonPedirCarta.disabled = estado
    };
};

const modificarBotonMePlanto = (estado : boolean) =>{
    let botonMePlanto = document.getElementById("meplanto")
    if(botonMePlanto !== null && botonMePlanto !== undefined && botonMePlanto instanceof HTMLButtonElement){
        botonMePlanto.disabled=estado
    };
};

const modificarEstadoBoton = (estado: string) =>{
    const botonNuevaPartida = document.getElementById("nuevaPartida")
    if(botonNuevaPartida !== null && botonNuevaPartida !== undefined && botonNuevaPartida instanceof HTMLButtonElement){
    botonNuevaPartida.style.visibility=estado;
    };
};

export const mePlanto = () => {
    modificarBotonPedirCarta(true);
    modificarBotonMePlanto(true);
    const mensaje = resultados (puntuacionInicial);
    pintarMensaje(mensaje);
    modificarEstadoBoton("visible"); 
};

const resetCarta = () => {
    let cartaElement = document.getElementById("carta")
    if(cartaElement !== null && cartaElement !== undefined && cartaElement instanceof HTMLImageElement){
        cartaElement.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
    }

};

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

export const pideCarta = () => {
    const numeAleatorio = obtenerNumeroAlearorio();
    const carta = dameCarta(numeAleatorio);
    const url = getUrl(carta);
    const valorCarta = obtenerValorCarta (carta);
    muestraCarta(url);
    sumarPuntuacion(valorCarta);
    muestraPuntuacion();
    comprobarPuntuacion(puntuacionInicial);

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
    modificarBotonPedirCarta(false)
    modificarBotonMePlanto(false)
    modificarEstadoBoton("hidden")
    resultados(puntuacionInicial)
    resetMensaje()
};
