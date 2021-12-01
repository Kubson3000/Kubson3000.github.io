{
    var s_zero = "Select a game";
    var s_one = "";
    var s_two = "";
    var s_three = "";
    var s_four = "";
    var s_five = "";
}
function clear() {
    let one = document.getElementById("one");
    one.style.border = "none";
    let two = document.getElementById("two");
    two.style.border = "none";
    let three = document.getElementById("three");
    three.style.border = "none";
    let four = document.getElementById("four");
    four.style.border = "none";
    let five = document.getElementById("five");
    five.style.border = "none";
}
function one(name) {
    let div = document.getElementById(name);
    let out = document.getElementById("middle");
    if (div.style.border == "inset") {
        div.style.border = 'none';
        out.innerHTML = s_zero;
    }
    else {
        clear();
        div.style.border = "inset";
        switch (name) {
            case 'one':
                break;
            case 'two':
                break;
            case 'three':
                break;
            case 'four':
                break;
            case 'five':
                break;
            default:
                console.log("Well then... ", name);
                break;
        }
    }
}