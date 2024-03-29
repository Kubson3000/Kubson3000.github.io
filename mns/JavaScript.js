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
    if (bombs < width * height) {
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

function bombCounter() {
    for (var h = 0; h < height; h++) {
        for (var w = 0; w < width; w++) {
            var counter = 0;
            let tile = document.getElementById("tile_" + h + "_" + w);
                for (var i = h - 1; i <= h + 1; i++) {
                    for (var j = w - 1; j <= w + 1; j++) {
                        if ((inBounds(i, j)) && (plane[h][w] == 0)) {
                            if (plane[i][j] == 1) counter++;
                        }
                    }
                }
            if (counter > 0) tile.innerHTML = counter;
        }
    }
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
            the();
            bombCounter();
            var c = 0;
            for (var c_h = h - 1; c_h <= h + 1; c_h++) {
                for (var c_w = w - 1; c_w <= w + 1; c_w++) {
                    if (inBounds(c_h, c_w)) {
                        if (plane[c_h, c_w] == 1) c++;
                    }
                }
            }
            if (c > 0) tile.innerHTML = c;
        }
        else {
            if (plane[h][w] == 0) {
                tile.classList.remove("unclicked");
                tile.classList.add("clicked");
                plane[h][w] = 2;
                the();
                bombCounter();
            }
            else if (plane[h][w] == 1) {
                isAlive = false;
                alert("Not poggers");
            }
        }
        move_number++;
    }
}

function inBounds(h, w) {
    if ((h >= 0) && (w >= 0) && (h < height) && (w < width)) {
        return true;
    }
    else {
        return false;
    }
}

function the() {
    var checking_index, bomb_count, clicked_found;
    var updated = false;
    bombCounter();
    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            // Going thru the whole plane
            // 0 = unclicked
            // 1 = bomb
            // 2 = clicked
            let temp = document.getElementById("tile_" + i + "_" + j); 
            if ((plane[i][j] == 2) && (temp.innerHTML == "")) {
                checking_index = 0;
                for (var ch_h = i - 1; ch_h <= i + 1; ch_h++) {
                    for ( var ch_w = j - 1; ch_w <= j + 1; ch_w++) {
                        if ((inBounds(ch_h, ch_w))) {
                            // targeting top, left, right and bottom from tile
                            bomb_count = 0;
                            clicked_found = false;
                            for (var ver_h = ch_h - 1; ver_h <= ch_h + 1; ver_h++) {
                                for (var ver_w = ch_w - 1; ver_w <= ch_w + 1; ver_w++) {
                                    if (inBounds(ver_h, ver_w)) {
                                        if (plane[ver_h][ver_w] == 1) bomb_count++;
                                        if (plane[ver_h][ver_w] == 2) clicked_found = true;
                                    }
                                }
                            }
                            let ch_tile = document.getElementById("tile_" + ch_h + "_" + ch_w);
                            if (plane[ch_h][ch_w] == 0) {
                                if (clicked_found) { 
                                    plane[ch_h][ch_w] = 2;
                                    ch_tile.classList.remove("unclicked");
                                    ch_tile.classList.add("clicked");
                                    updated = true;
                                }
                                if (bomb_count > 0) {
                                    ch_tile.innerHTML = bomb_count;
                                }
                            }
                        }
                        checking_index++;
                    }
                }
            }
        }
    }
    if (updated) {
        the();
    }
}
