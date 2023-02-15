const soma = document.getElementById('soma');
const subtracaoAB = document.getElementById('subtraçãoAB');
const subtracaoBA = document.getElementById('subtraçãoBA');
const mult = document.getElementById('multiplicao');
const divAB = document.getElementById('divisaoAB');
const divBA = document.getElementById('divisaoBA');
const potenAB = document.getElementById('potenciaAB');
const potenBA = document.getElementById('potenciaBA');
const raizA = document.getElementById('raizA');
const raizB = document.getElementById('raizB');
const fatorialA = document.getElementById('fatorialA');
const fatorialB = document.getElementById('fatorialB');
const PorcentagemAB = document.getElementById('porcentagemAB');
const PorcentagemBA = document.getElementById('porcentagemBA');
const media = document.getElementById('media');


soma.innerHTML = 0;
subtracaoAB.innerHTML = 0;
subtracaoBA.innerHTML = 0;
mult.innerHTML = 0;
divAB.innerHTML = 0;
divBA.innerHTML = 0;
potenAB.innerHTML = 0;
potenBA.innerHTML = 0;
raizA.innerHTML = 0;
raizB.innerHTML = 0;
fatorialA.innerHTML = 0;
fatorialB.innerHTML = 0;
PorcentagemAB.innerHTML = 0;
PorcentagemBA.innerHTML = 0;
media.innerHTML = 0;

const calcSoma = (a, b) => {
    return a + b;
}

const calcSubAB = (a, b) => {
    return a - b;
}

const calcSubBA = (a, b) => {
    return b - a;
}

const calcmult = (a, b) => {
    return a * b;
}

const calcDivAB = (a, b) => {
    return (a / b).toFixed(2);
}

const calcDivBA = (a, b) => {
    return (b / a).toFixed(2);
}

const calcPotenAB = (a, b) => {
    return Math.pow(a, b);
}

const calcPotenBA = (a, b) => {
    return Math.pow(b, a);
}

const calcRaizA = (a) => {
    return (Math.sqrt(a)).toFixed(2);
}

const calcRaizB = (b) => {
    return (Math.sqrt(b)).toFixed(2);
}

function calcFatorialA (a){
    if (a === 0 || a === 1) {
        return 1;
    }        
    for (var i = a - 1; i >= 1; i--) {
        a *= i;
     }
     return a;
}

function calcFatorialB(b) {
    if (b === 0 || b === 1) {
        return 1;
    }        
    for (var i = b - 1; i >= 1; i--) {
        b *= i;
     }
     return b;
}

const calcPorcentagemAB = (a, b) => {
    return ((b * 100) / a).toFixed(0) + '%';
}

const calcPorcentagemBA = (a, b) => {
    return ((a * 100) / b).toFixed(0) + '%';
}

const calcMedia = (a, b) => {
    return ((a + b) / 2).toFixed(1);
}

function calcular() {
    const inputA = Number(document.getElementById('primeiroNumero').value);
    const inputB = Number(document.getElementById('segundoNumero').value);

    soma.innerHTML = (calcSoma(inputA, inputB));
    subtracaoAB.innerHTML = (calcSubAB(inputA, inputB));
    subtracaoBA.innerHTML = (calcSubBA(inputA, inputB));
    mult.innerHTML = (calcmult(inputA, inputB));
    divAB.innerHTML = (calcDivAB(inputA, inputB));
    divBA.innerHTML = (calcDivBA(inputA, inputB));
    potenAB.innerHTML = (calcPotenAB(inputA, inputB));
    potenBA.innerHTML = (calcPotenBA(inputA, inputB));
    raizA.innerHTML = (calcRaizA(inputA));
    raizB.innerHTML = (calcRaizB(inputB));
    fatorialA.innerHTML = (calcFatorialA(inputA));
    fatorialB.innerHTML = (calcFatorialB(inputB));
    PorcentagemAB.innerHTML = (calcPorcentagemAB(inputA, inputB));
    PorcentagemBA.innerHTML = (calcPorcentagemBA(inputA, inputB));
    media.innerHTML = (calcMedia(inputA, inputB));

}
