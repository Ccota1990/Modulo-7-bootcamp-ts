import { vi } from "vitest";
import { obtenerNumeroAlearorio } from "./motor";
import { obtenerValorCarta } from "./modelo";


describe("obtenerNumeroAleatorio", () => {
  
  it("debe devolver el numero esperado", () => {
    //Arrange
    const valor = 6;
    vi.spyOn(Math, "random").mockReturnValue(0.5);

    //Act
    const valorAleatorio = obtenerNumeroAlearorio();

    //Assert
    expect(valorAleatorio).toEqual(valor);
  });
});


describe ("obtenerValorCarta", () => {
  it ("Si la carta es mayor que 7 la puntuación es de 0.5", () => {
      //Arrange
      const puntuacionEsperada: number = 0.5;
      const carta: number = 11
      //Act
      const resultado: number = obtenerValorCarta(carta);
      //Assert
      expect(resultado).toBe(puntuacionEsperada);
  });

  it ("Si la carta es menor o igual que 7 la puntuación es su valor real", () => {
      //Arrange
      const puntuacionEsperada: number = 4;
      const carta: number = 4
      //Act
      const resultado: number = obtenerValorCarta(carta);
      //Assert
      expect(resultado).toBe(puntuacionEsperada);
  });
});

