class Calculator {
    add(x: number, y: number): number {
        return x + y;
    }

    subtract(x: number, y: number): number {
        return x - y;
    }

    multiply(x: number, y: number): number {
        return x * y;
    }

    divide(x: number, y: number): number {
        if (y === 0) {
            throw new Error('No se puede dividir por cero');
        }
        return x / y;
    }
}

// Instancia de la calculadora
const calculator = new Calculator();

// Función para manejar la entrada del usuario y mostrar el resultado
function calculate(): void {
    const num1: number = parseFloat((<HTMLInputElement>document.getElementById('num1')).value);
    const num2: number = parseFloat((<HTMLInputElement>document.getElementById('num2')).value);

    const resultDiv: HTMLElement | null = document.getElementById('result');

    if (resultDiv !== null) {
        try {
            const result: string = `
                Suma: ${calculator.add(num1, num2)} <br>
                Resta: ${calculator.subtract(num1, num2)} <br>
                Multiplicación: ${calculator.multiply(num1, num2)} <br>
                División: ${calculator.divide(num1, num2)}
            `;
            resultDiv.innerHTML = result;
        } catch (error) {
            resultDiv.innerHTML = `<span style="color: red;">${error.message}</span>`;
        }
    } else {
        console.error('No se encontró el elemento con id "result"');
    }
}
