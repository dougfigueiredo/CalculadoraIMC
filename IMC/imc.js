const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso /(altura * altura)).toFixed(1);
        
        let classific = '';

        if (valorIMC < 18.5){
            classific = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            classific = 'com o peso ideal. Parabéns!';
        } else if (valorIMC < 30) {
            classific = 'acima do peso.';
        } else if (valorIMC < 35) {
            classific = 'com obesidade nível I.';
        } else if (valorIMC < 40) {
            classific = 'com obesidade nível II';
        }else {
            classific = 'com obesidade nível III. CUIDADO!'
        }
        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classific}`;

    } else {
        resultado.textContent = 'Preencha todos os campos!!!'
    }


}
calcular.addEventListener('click', imc);