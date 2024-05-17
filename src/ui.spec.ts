
import { comprobarPuntuacion, resultados } from "./ui";

describe("comprobarPuntuacion", () => {
    it("Debería devolver '¡Lo has clavado! ¡Enhorabuena!' si la puntuación es 7.5", () => {
        //Arrange
        const puntos = 7.5;

        //Act
        const resultado = comprobarPuntuacion(puntos);

        //Assert
        expect(resultado).toBe("¡Lo has clavado! ¡Enhorabuena!");
    });

    it("Debería devolver '¡¡Game over!!' si la puntuación es mayor que 7.5", () => {
        //Arrange
        const puntos = 8;

        //Act
        const resultado = comprobarPuntuacion(puntos);

        //Assert
        expect(resultado).toBe("¡¡Game over!!");
    });

    it("No debería devolver nada si la puntuación es menor que 7.5", () => {
        //Arrange
        const puntos = 7;

        //Act
        const resultado = comprobarPuntuacion(puntos);

        //Assert
        expect(resultado).toBeNull();
    });
});

describe("resultados", () => {
    it("Debería devolver 'Has sido muy conservador' si la puntuación es <=4", () => {
        //Arrange
        const puntos = 3;

        //Act
        const resultado = resultados(puntos);

        //Assert
        expect(resultado).toBe("Has sido muy conservador");
    });

    it("Debería devolver Te ha entrado el canguelo eh?' si la puntuación es =5", () => {
        //Arrange
        const puntos = 5;

        //Act
        const resultado = resultados(puntos);

        //Assert
        expect(resultado).toBe("Te ha entrado el canguelo eh?");
    });

    it("Debería devolver 'Casi casi...' si la puntuación es >5 y <=7.5", () => {
        //Arrange
        const puntos = 7;

        //Act
        const resultado = resultados(puntos);

        //Assert
        expect(resultado).toBe("Casi casi...");
    });
});
