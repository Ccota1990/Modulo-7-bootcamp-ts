import { vi } from "vitest"; 
import { comprobarNumero, hasSuperadoElNumeroMaximoDeIntentos } from "./motor";
import { Estado,  partida } from "./modelo";


describe ('comprobarNumero' , () => {
    it("Deberia devolver NO_ES_UN_NUMERO si el texto no es un numero" , () => {
        //Arrange
        const texto : string = "esto no es un numero";
        const resultadoEsperado : Estado = "NO_ES_UN_NUMERO";

        //Act
        const resultado : Estado = comprobarNumero(texto); 

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it ("Deberia de devolver ES_EL_NUMERO_SECRETO cuando texto es el numero a acertar" , () => {
        //Arrange
        const resultadoEsperado: Estado = "ES_EL_NUMERO_SECRETO";
        const texto : string = "23";
        vi.spyOn(partida, "numeroParaAcertar", "get").mockReturnValue(23);

        //Act
        const resultado: Estado =  comprobarNumero(texto);

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("Deberia devolver EL_NUMERO_ES_MAYOR cuando el texto es mayor", () => {
        //Arrange
        const resultadoEsperado : Estado = "EL_NUMERO_ES_MAYOR"
        const texto : string = "24";
        vi.spyOn(partida, "numeroParaAcertar", "get").mockReturnValue(23);

        //Act
        const resultado : Estado = comprobarNumero(texto);

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it("Deberia devolver EL_NUMERO_ES_MENOR cuando el texto es menor", () => {
        //Arrange
        const resultadoEsperado : Estado = "EL_NUMERO_ES_MENOR";
        const texto: string ="22";
        vi.spyOn(partida, "numeroParaAcertar", "get").mockReturnValue(23);

        //Act
        const resultado :Estado =comprobarNumero(texto);

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });

    it ("Deberia devolver GAME_OVER_MAXIMO_INTENTOS si has superado los intentos", () => {
        //Arrange
        const resultadoEsperado: Estado = "GAME_OVER_MAXIMO_INTENTOS";
        const texto : string ="22";
        vi.spyOn(partida, "numeroParaAcertar", "get").mockReturnValue(23);
        vi.spyOn(partida, "numeroDeIntentos", "get").mockReturnValue(5);

        //Act
        const resultado : Estado = comprobarNumero(texto);

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });
});