const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const operacion = document.getElementById('operacion');
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

function validarCampos() {
    const n1 = parseFloat(numero1.value);
    const n2 = parseFloat(numero2.value);

    if (isNaN(n1) || isNaN(n2) || n1 === 0 || n2 === 0 && operacion.value === 'division') {
    calcular.disabled = true;
    } else {
    calcular.disabled = false;
    }
}

numero1.addEventListener('input', validarCampos);
numero2.addEventListener('input', validarCampos);
operacion.addEventListener('change', validarCampos);

calcular.addEventListener('click', () => {
    const n1 = parseFloat(numero1.value);
    const n2 = parseFloat(numero2.value);
    let res = '';

    if (isNaN(n1) || isNaN(n2)) {
    resultado.textContent = 'Por favor, ingrese los números correspondientes.';
    return;
    }

    switch (operacion.value) {
    case 'suma':
        res = n1 + n2;
        break;
    case 'resta':
        res = n1 - n2;
        break;
    case 'multiplicacion':
        res = n1 * n2;
        break;
    case "division":
        res = n1 / n2;
    }

    resultado.textContent = `El resultado es el siguiente: ${res}`;
});