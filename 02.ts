function showVar(){
    var text = 'Weber';
    if(true) {
        var text = 'Texto';
    }
    console.log(text);
}

function showLet() {
    let text = 'Weber';
    if (true) {
        let text = 'Texto';
        console.log(text);
    }
    console.log(text);
}

showLet();