class Convertidor {
    constructor(cantidad, moneda) {
        this.cantidad = cantidad;
        this.moneda = moneda;
    }

    convertirCambio() {
        let tasa = 0;
        let simbolo = "";

        switch (this.moneda) {
            case "USD":
                tasa = 0.054;
                simbolo = "$";
                break;
            case "EUR":
                tasa = 0.047;
                simbolo = "€";
                break;
            case "CHF":
                tasa = 0.044;
                simbolo = "₣";
                break;
            case "GBP":
                tasa = 0.041;
                simbolo = "£";
                break;
            case "BRL":
                tasa = 0.29;
                simbolo = "R$";
                break;
            default:
                tasa = 0;
                simbolo = "";
                break;
        }

        const resultado = this.cantidad * tasa;
        return `${simbolo} ${resultado.toFixed(2)}`; // concatenar símbolo y resultado formateado de las variables y devuelve el resultado limitado a dos decimales 
    }
}

// Evento del formulario
document.getElementById("formMoneda").addEventListener("submit", (e) => {
    e.preventDefault();

    let cantidad = document.getElementById("cantidad").value;
    let moneda = document.getElementById("monedaAConvertir").value;
    let resultado = document.getElementById("valor");

    if (cantidad === "" || cantidad <= 0) {
        resultado.innerHTML = "Ingresa una cantidad válida.";
        return;
    }

    // Se creal objeto y muestra resultado
    let cambio = new Convertidor(cantidad, moneda);
    resultado.innerHTML = `<p>Resultado: ${cambio.convertirCambio()}</p>`;
});
