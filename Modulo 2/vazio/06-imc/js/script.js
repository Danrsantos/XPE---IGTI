function start () {
    let buttonCalculateImc = document.querySelector('#button-calculate-imc')
    buttonCalculateImc.addEventListener('click', handleButtonClick);
}

function calculateImc (weigth, height) {
    return (weigth / (height * height));
}

function handleButtonClick() {
    let inputWeight = document.querySelector('#input-weight');
    let inputHeight = document.querySelector('#input-height');

    let weight = Number(inputWeight.value);
    let height = Number(inputHeight.value);

    let imc = calculateImc(weight, height);

    imcResult = document.querySelector('#imc-result');
    imcResult.textContent = imc.toFixed(2).replace('.', ',');
}

start();