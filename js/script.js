{    
    const playGame = function (playerInput){
    clearMessages ();
        const getMoveName = function (argMoveId){
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

        const displayResult = function (argComputerMove, argPlayerMove){
            console.log('Komputer zagrał ' + argComputerMove + ', a Ty ' + argPlayerMove);
        
            if(( argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
            ( argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
            ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień')){
            printMessage('Wygrałem!!');
            } else if(argComputerMove == argPlayerMove){
                printMessage('Remis!'); 
            } else {
            printMessage('Tym razem przegrałem');
            }
        }

        const randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Wylosowana liczba to: ' + randomNumber);

        const argComputerMove = getMoveName(randomNumber);
        printMessage('Ruch komputera to: ' + argComputerMove);
        console.log('Gracz wpisał: ' + playerInput);

        const argPlayerMove = getMoveName(playerInput);
        printMessage('Twój ruch to: ' + argPlayerMove);

        displayResult(argComputerMove, argPlayerMove);
    }

        document.getElementById('play-rock').addEventListener('click', function(){
            playGame(1);
        });
        
        document.getElementById('play-paper').addEventListener('click', function(){
            playGame(2);
        });

        document.getElementById('play-scissors').addEventListener('click', function (){
            playGame(3);
        });
}