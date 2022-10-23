function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }

    if(argMoveId == 2){
      return 'papier';  
    }

    if(argMoveId == 3){
        return 'nożyce';  
    } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
    }
  }

  function displayResult(argComputerMove, argPlayerMove){
    console.log('Komputer zagrał ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
    if(( argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
    ( argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
    ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień')){
      printMessage('Wygrałem!!');
    } else if(argComputerMove == argPlayerMove){
        printMessage('Remis!'); 
    } else {
      printMessage('Tym razem przegrałem :(');
    }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

printMessage('Ruch komputera to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + argPlayerMove);

displayResult(argComputerMove, argPlayerMove);

/*if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2){
  computerMove = 'papier';
}
else if(randomNumber == 3){
  computerMove = 'nożyce';
}*/

/*if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
  playerMove = 'papier';
}
else if(playerInput == '3'){
  playerMove = 'nożyce';
}*/ 

/*if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }

if else( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Przegrywasz :(!');
  } 
  
if else( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis');
  }

if else( computerMove == 'papier', 'kamień', 'nożyce' && playerMove == 'nieznany ruch'){
    printMessage('Chyba jakaś pomyłeczka');
  }
  
if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  }

if else( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Przegrywasz :(!');
  } 
  
if else( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis');
}

if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  }

if else( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Przegrywasz :(!');
  } 
  
if else( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis');
}*/

