function showVar() {
    var text = 'Weber';
    var text = 'Mori';
    if (true) {
        var text = 'Lorem';
    }
    console.log(text);
}
function showLet() {
    var text = 'Weber';
    text = 'Murao';
    if (true) {
        var text_1 = 'Texto';
        console.log(text_1);
    }
    console.log(text);
}
showVar();
showLet();
