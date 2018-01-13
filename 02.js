function showVar() {
    var text = 'Weber';
    if (true) {
        var text = 'Texto';
    }
    console.log(text);
}
function showLet() {
    var text = 'Weber';
    if (true) {
        var text_1 = 'Texto';
        console.log(text_1);
    }
    console.log(text);
}
showLet();
