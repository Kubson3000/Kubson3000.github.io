var area,width,height,bombs,plane,tiles, move_number = 0, isAlive = true;
window.onload = function() {
    area = document.getElementById("game_area");
    height = document.getElementById("height_input").value;
    width = document.getElementById("width_input").value;
    bombs = document.getElementById("bombs_input").value;
    plane = [];
    tiles = [];
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function update_values() {
    height = document.getElementById("height_input").value;
    width = document.getElementById("width_input").value;
    bombs = document.getElementById("bombs_input").value;
}

function start() {
    document.getElementById("height_input").disabled = true;
    document.getElementById("width_input").disabled = true;
    document.getElementById("bombs_input").disabled = true;
    move_number = 0;
    area.innerHTML = "";
    for (var i = 0; i < height; i++) {
        plane[i] = [];
        for (var j = 0; j < width; j++) {
            plane[i][j] = 0;
            area.innerHTML += "<div id='tile_"+i+"_"+j+"' class='unclicked tile' onclick='press("+i+", "+j+")'></div>";
        }
        area.innerHTML += "<div class='spacer'></div>";
    }
}

function restart() {
    document.getElementById("height_input").disabled = false;
    document.getElementById("width_input").disabled = false;
    document.getElementById("bombs_input").disabled = false;
    area.innerHTML = "";
    isAlive = true;
}

function prep_bombs() {
    var bombs_to_prep = bombs;
    while (bombs_to_prep > 0) {
        var h = getRndInteger(0, height);
        var w = getRndInteger(0, width);
        if (plane[h][w] == 0) {
            plane[h][w] = 1;
            bombs_to_prep--;
        }
    }
    console.log(plane);
}

function press(h, w) {
    if (isAlive) {
        let div_id = "tile_" + h + "_" + w;
        let tile = document.getElementById(div_id);
        if (move_number == 0) {
            tile.classList.remove("unclicked");
            tile.classList.add("clicked");
            plane[h][w] = 2;
            prep_bombs();
            var bombcount = 0;
            for (var cb_height = h - 1; cb_height <= h + 1; cb_height++) {
                for (var cb_width = w - 1; cb_width <= w + 1; cb_width++) {
                    if ((cb_height >= 0) && (cb_height < height) && (cb_width >= 0) && (cb_width < width)) {
                        if (plane[cb_height][cb_width] == 1) bombcount++;
                    }
                }
            }
            if (bombcount > 0) tile.innerHTML = bombcount;
            the();
        }
        else {
            if (plane[h][w] == 0) {
                tile.classList.remove("unclicked");
                tile.classList.add("clicked");
                plane[h][w] = 2;
                the();
            }
            else if (plane[h][w] == 1) {
                isAlive = false;
                alert("Not poggers");
            }
        }
        move_number++;
    }
}

function the() {
    var updated = false;
    var bombcount = 0;
    var clickedFound = false;
    var checking_index = 0;
    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            if (plane[i][j] == 0){
                bombcount = false;
                clickedFound = false;
                checking_index = 0;
                for (var checking_height = i - 1; checking_height <= i + 1; checking_height++) {
                    for (var checking_width = j - 1; checking_width <= j + 1; checking_width++) {
                        if ((checking_height >= 0) && (checking_height < height) && (checking_width >= 0) && (checking_width < width)) {
                            if (plane[checking_height][checking_width] == 1) bombcount++;
                            else if ((plane[checking_height][checking_width] == 2) && (checking_height % 2 == 1)) clickedFound = true;
                        }
                        checking_index++;
                    }
                }
                if (clickedFound) {
                    document.getElementById("tile_" + i + "_" + j).classList.remove("unclicked");
                    document.getElementById("tile_" + i + "_" + j).classList.add("clicked");
                    if (bombcount == 0) {
                        plane[i][j] = 2;
                    }
                    else document.getElementById("tile_" + i + "_" + j).innerHTML = bombcount;
                    updated = true;
                }
            }
        }
    }
    if (updated) {
        console.log("Pog");
        the();
    }
}