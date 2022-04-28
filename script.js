let fields = [];
let gameOver = false;
let currentShape = 'cross';

function fillShape(id) { //um id zu übergeben
    if(!fields[id] && !gameOver){ //damit ein Feld nicht zweimal geklickt werden kann --- "!" --- um das ganze zu negieren! 
        //gilt auf für Game Over mit ! als Negierung
    if(currentShape == 'cross') {
        currentShape = 'circle';
        document.getElementById('player-1').classList.remove('player-inactive');// player switch optisch im panel
        document.getElementById('player-2').classList.add('player-inactive');
    } else {
        currentShape = 'cross';
        document.getElementById('player-1').classList.add('player-inactive');
        document.getElementById('player-2').classList.remove('player-inactive');
    }
    fields[id] = currentShape;     //um fields den ID zuweisen zu können
    console.log(fields);
    draw();
    checkForWin();
}
}

function draw() { // circle oder cross 
    for(let i = 0; i < fields.length; i++) {
        if(fields[i] == 'circle'){
            document.getElementById('circle-' + i).classList.remove('d-none');
        }
        if(fields[i] == 'cross'){
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}

function checkForWin() {
    let winner;

    //first Row
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]){ 
        winner = fields[0]; //das && fields[] am Ende, kontrolliert die Eingabe nochmals, damit Undefined verhindert wird.
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]){
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]){
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scaleX(1)';
    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]){
        winner = fields[0];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]){
        winner = fields[1];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]){
        winner = fields[2];
        document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]){
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(1)';
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]){
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'rotate(135deg) scaleX(1)';
    }
    if(winner) {
        console.log('Gewonnen' , winner);
        gameOver = true;

        setTimeout(function(){ //damit die Animation erst 2 sekunden später kommt.
        document.getElementById('game-over').classList.remove('d-none');
    }, 1500);
    }
}