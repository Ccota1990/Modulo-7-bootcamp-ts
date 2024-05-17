export let puntuacionInicial : number = 0;


export const obtenerValorCarta = (carta: number) =>{
    return carta < 8 ? carta :0.5;
};

export const sumarPuntuacion = (valorCarta : number) =>{
        puntuacionInicial = puntuacionInicial + valorCarta;   
};

export const resetPuntuacion = () => {
    let puntuacion = document.getElementById("puntos")
    if(puntuacion !== null && puntuacion !== undefined && puntuacion instanceof HTMLElement){
        puntuacion.innerHTML = "0"
        puntuacionInicial = 0
    }
};

