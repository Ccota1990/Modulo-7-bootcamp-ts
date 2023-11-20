export let puntuacionInicial : number = 0;


export const sumarPuntuacion = (carta: number) =>{
    if(carta<8){
        puntuacionInicial = puntuacionInicial + carta 
    }else{
        puntuacionInicial = puntuacionInicial + 0.5
    }  
};

export const resetPuntuacion = () => {
    let puntuacion = document.getElementById("puntos")
    if(puntuacion !== null && puntuacion !== undefined && puntuacion instanceof HTMLElement){
        puntuacion.innerHTML = "0"
        puntuacionInicial = 0
    }
};
