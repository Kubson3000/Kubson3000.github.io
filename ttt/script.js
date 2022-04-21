var plane = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var score_o = 0, score_x = 0, move_number;
var current_player = 'X';
var winner_lock = false;

function setup() {
    winner_lock = false;
    move_number = 0;
    document.getElementById("announcer").innerHTML = "";
    plane.forEach(function (item, index, array) {
        document.getElementById(item).innerHTML = "";
    });
    scoreboard_updater();
}

function take_input(number) {
    if ((!winner_lock) && (document.getElementById(plane[number-1]).innerHTML == "")) {
        move_number++;
        document.getElementById(plane[number-1]).innerHTML = "<div class=\"text_center\">" + current_player + "</div>";
        winner_checker();     // Don't
        player_switcher();    // change
        scoreboard_updater(); // the ORDER
    }
}

function player_switcher() {
    if (current_player == 'X') current_player = 'O';
    else current_player = 'X';
}

function scoreboard_updater() {
    let str = "<h3><div style=\"float:left;\">X: " + String(score_x) + "</div><div style=\"float:right;\">O: " + String(score_o) + "</div></h3><div style=\"clear:both;\"></div>";
    document.getElementById("scoring").innerHTML = str;

    str = "<h3>Current turn: " + current_player + "</h3>";
    document.getElementById("current_turn").innerHTML = str;
}

function winner_checker() {
    let horizontal = [1, 4, 7];
    let vertical = [3, 4, 5];
    let cross = [4];

    horizontal.forEach(function(item, index, array) {
        if (document.getElementById(plane[item]).innerHTML != "") {
            if (document.getElementById(plane[item]).innerHTML == document.getElementById(plane[item-1]).innerHTML) {
                if (document.getElementById(plane[item]).innerHTML == document.getElementById(plane[item+1]).innerHTML) {
                    announcer();
                }
            }
        }
    });

    vertical.forEach(function(item, index, array) {
        if (document.getElementById(plane[item]).innerHTML != "") {
            if (document.getElementById(plane[item]).innerHTML == document.getElementById(plane[item-3]).innerHTML) {
                if (document.getElementById(plane[item]).innerHTML == document.getElementById(plane[item+3]).innerHTML) {
                    announcer();
                }
            }
        }
    });

    cross.forEach(function(item, index, array) {
        if (document.getElementById(plane[item]).innerHTML != "") {
            if (document.getElementById(plane[item]).innerHTML == document.getElementById(plane[item-4]).innerHTML) {
                if (document.getElementById(plane[item]).innerHTML == document.getElementById(plane[item+4]).innerHTML) {
                    announcer();
                }
            }
            if (document.getElementById(plane[item]).innerHTML == document.getElementById(plane[item-2]).innerHTML) {
                if (document.getElementById(plane[item]).innerHTML == document.getElementById(plane[item+2]).innerHTML) {
                    announcer();
                }
            }
        }
    });

    if ((!winner_lock) && (move_number == 9)) {
        document.getElementById("announcer").innerHTML = "<h3>Draw</h3><button style=\"float:right;\" onclick=\"setup()\">Reset</button></h3>";
        winner_lock = true;
    }
}

function announcer() {
    document.getElementById("announcer").innerHTML = "<h3>Winner: " + current_player + "<button style=\"float:right;\" onclick=\"setup()\">Reset</button></h3>";
    if (current_player == 'X') score_x++;
    else score_o++;
    winner_lock = true;
}

window.onload = function() {
    setup();
}
