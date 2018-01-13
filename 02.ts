function showVar(){
    var text = 'Weber';
    var text = 'Mori';
    if(true) {
        var text = 'Lorem';
    }
    console.log(text);
}

function showLet() {
    let text = 'Weber';
    text = 'Murao'
    if (true) {
        let text = 'Texto';
        console.log(text);
    }
    console.log(text);
}

showVar();
showLet();