export const dameCarta = ()  => {
    let numeroBase = Math.floor (Math.random()*10)+1;
    if (numeroBase >7) {
        return numeroBase+2       
    } else{
        return numeroBase
    }
};

