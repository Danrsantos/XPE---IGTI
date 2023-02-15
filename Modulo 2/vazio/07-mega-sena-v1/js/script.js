let state = {board: [], currentGame: [], saveGames: []};

function start (){
    createBoard();
    newGame();

}

function addNumberToGame(numberToAdd) {
    if (numberToAdd < 1 || numberToAdd > 60){
        console.error('Número inválido',numberToAdd);
        return;
    } else if (state.currentGame.length >= 6){
        console.error('O jogo está completo');
        return;
    } else if (isNumberInGame(numberToAdd)){
        console.error('Este número já foi selecionado');
        return;
    }

    state.currentGame.push(numberToAdd);
}

function isNumberInGame(numbertoCheck) {
   return state.currentGame.includes(numbertoCheck);
}

function removeNumberFromGame(numberToRemove) {
    let newGame = [];

    if (numberToRemove < 1 || numberToRemove > 60){
        console.error('Número inválido',numberToRemove);
        return;
    } 

    for ( let i = 0; i < state.currentGame.length; i++) {
        let currentNumber = state.currentGame[i];

        if (currentNumber === numberToRemove){
            continue
        }

        newGame.push(currentNumber);
    }

    state.currentGame = newGame;
}

function isGameComplete() {
    return state.currentGame.length === 6;
}

function saveGame() {
    if (!isGameComplete()) {
        console.error('O jogo não está completo');
        return;
    }

    state.saveGames.push(state.currentGame);

    console.log(state.saveGames);

    newGame();
}

function resetGame() {
    state.currentGame = [];
}

function createBoard() {
    state.board = [];

    for(let i = 1; i <= 60; i++) {
        state.board.push(i);
    }
}

function newGame(){
    resetGame();
    render();
}

function render() {
    renderBoard();
    rederButtons();
    renderSavedGames();
}

function renderBoard() {
    let divBoard = document.querySelector('#megasena-board');
    divBoard.innerHTML = '';

    let ulNumbers = document.createElement('ul');
    ulNumbers.classList.add('numbers');

    for (let i = 0; i < state.board.length; i++) {
        let currentNumber = state.board[i];
        let liNumber = document.createElement('li');
        liNumber.classList.add('number');
        liNumber.textContent = currentNumber;

        ulNumbers.appendChild(liNumber);

        liNumber.addEventListener('click', handleNumberClick);

        if (isNumberInGame(currentNumber)){
            liNumber.classList.add('selected-number');
        }
    }

    divBoard.appendChild(ulNumbers);
}

function handleNumberClick(event) {
    let value = Number(event.currentTarget.textContent);

    if (isNumberInGame(value)){
        removeNumberFromGame(value);
    } else {
        addNumberToGame(value);
    }

    console.log(state.currentGame)

    render();
}

function rederButtons() {
    let divButtons = document.querySelector('#megasena-buttons');
    divButtons.innerHTML = ''
    let buttonNewGame = createNewGameButton();
    let buttonRandomGame = createRandomGameButton();
    let buttonSaveGame = createSaveGameButton();
    divButtons.appendChild(buttonNewGame);
    divButtons.appendChild(buttonRandomGame);
    divButtons.appendChild(buttonSaveGame);

    
}

function renderSavedGames() {
    let divSavedGames = document.querySelector('#megasena-games');
    divSavedGames.innerHTML = '';

    if (state.saveGames.length === 0) {
        divSavedGames.textContent = 'Nenhum jogo salvo';
    } else {
        let ulSavedGames = document.createElement('ul');

        for (let i = 0; i < state.saveGames.length; i++){
            let currentGame = state.saveGames[i];
            let liGame = document.createElement('li');
            liGame.textContent = currentGame.join(', ');

            ulSavedGames.appendChild(liGame);
        }

        divSavedGames.appendChild(ulSavedGames);
    }
}

function createNewGameButton() {
    let button = document.createElement('button');
    button.textContent = 'Novo jogo';
    button.addEventListener('click', newGame);
    return button;
}

function createRandomGameButton() {
    let button = document.createElement('button');
    button.textContent = 'Jogo aleatótio';
    button.addEventListener('click', randomGame);
    return button;
}

function randomGame() {
    resetGame();

    while(!isGameComplete()) {
        let randomNumber = Math.ceil(Math.random() * 60);
        addNumberToGame(randomNumber);
    }

    render();
}

function createSaveGameButton() {
    let button = document.createElement('button');
    button.textContent = 'Salvar jogo';
    button.addEventListener('click', saveGame);
    button.disabled = !isGameComplete(true);
    return button;
}

start();