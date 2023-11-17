import { vi } from "vitest"; 
import { comprobarNumero } from "./motor";
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
        vi.spyOn(partida, "numeroParaAcertar", "get").mockResolvedValue(23);

        //Act
        const resultado: Estado =  comprobarNumero(texto);

        //Assert
        expect(resultado).toBe(resultadoEsperado);
    });
});