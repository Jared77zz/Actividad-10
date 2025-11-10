class IMC {
    constructor(peso, altura) {
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        let imc = this.peso / (this.altura * this.altura);
        let categoria = "";
        let imagen = "";

        switch (true) {
            case (imc < 18.5):
                categoria = "Bajo peso";
                imagen = "images/bajo_peso.png";
                break;
            case (imc >= 18.5 && imc <= 24.9):
                categoria = "Peso normal";
                imagen = "images/peso_normal.png";
                break;
            case (imc >= 25 && imc <= 29.9):
                categoria = "Sobrepeso";
                imagen = "images/sobrepeso.png";
                break;
            default:
                categoria = "Obesidad";
                imagen = "images/obesidad.png";
                break;
        }

        return {
            imc: imc.toFixed(2),
            categoria: categoria,
            imagen: imagen
        };
    }
}

document.getElementById("formIMC").addEventListener("submit", function (e) {
    e.preventDefault();

    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    let persona = new IMC(peso, altura);
    let resultado = persona.calcularIMC();

    document.getElementById("resultado").innerHTML ="IMC: " + resultado.imc + "<br>" +"Categoría: " + resultado.categoria + "<br>" +
    "<img src='" + resultado.imagen + "' width='200'>";
});
