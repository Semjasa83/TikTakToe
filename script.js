let fields = [];

let currentShape = 'cross';

function fillShape(id) { //um id zu übergeben
    if(currentShape == 'cross') {
        currentShape = 'circle';
    } else {
        currentShape = 'cross';
    }
    fields[id] = currentShape;     //um fields den ID zuweisen zu können
    console.log(fields);
    draw();
}

function draw() {
    for(let i = 0; i < fields.length; i++) {
        if(fields[i] == 'circle'){
            document.getElementById('circle-' + i).classList.remove('d-none');
        }
        if(fields[i] == 'cross'){
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
        
    }
}