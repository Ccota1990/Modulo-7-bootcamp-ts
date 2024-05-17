

export const obtenerNumeroAlearorio = () => Math.floor (Math.random()*10)+1;

export const dameCarta = (numeAleatorio: number)  => {
    if (numeAleatorio >7) {
        return numeAleatorio+2       
    } else{
        return numeAleatorio
    }
};


