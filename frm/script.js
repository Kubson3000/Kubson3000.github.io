let form_list = ["one", "two", "three", "four", "five"];
let nav_list = ["t_one", "t_two", "t_three", "t_four", "t_five"];
window.onload = function() {
    for (const element of form_list) {
        document.getElementById(element).style.display = "none";
    }
    document.getElementById("one").style.display = "block";
    document.getElementById("t_one").classList.add("active");
    rainbow();
}
function rainbow() {
    let color_list = [["red", "rgb(255, 0, 0)"], ["yellow", "rgb(255, 255, 0)"], ["green", "rgb(0, 128, 0)"], ["blue", "rgb(0, 0, 255)"], ["pink", "rgb(255, 192, 203)"]];
    let text = document.getElementById("funny");
    let stopper = true, breaker = false;
    for (var i = 0; i < color_list.length; i++) {
        let color_box = document.getElementById(color_list[i][0]);
        if (text.style.color == color_list[i][1]) {
            for (var j = i; j < color_list.length; j++) {
                while (stopper) {
                    stopper = false;
                    if (i + 1 == color_list.length) j = 0;
                    else j = i + 1;
                }
                let next_box = document.getElementById(color_list[j][0]);
                if (next_box.checked) {
                    breaker = true;
                    color_switcher(color_list[j][1]);
                    break;
                }
            }
        }
        if (breaker) break;
    }
    setTimeout(rainbow, 1000);
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function color_switcher(x) {
    let funny = document.getElementById("funny");
    var current_rgb = funny.style.color.match(/\d+/g);
    var next_rgb = x.match(/\d+/g);
    while (!false) {
        for (var i = 0; i < 3; i++) {
            if (current_rgb[i] < next_rgb[i]) current_rgb[i]++;
            if (current_rgb[i] > next_rgb[i]) current_rgb[i]--;
        }
        funny.style.color = "rgb(" + current_rgb[0] + ", " + current_rgb[1] + ", " + current_rgb[2] + ")";
        let fuk = 0;
        for (var i = 0; i < 3; i++) {
            if (current_rgb[i] == next_rgb[i]) fuk++;
        }
        if (fuk == 3) break;
        await sleep(10);
    }
}
function form_switcher(target_form, bar_id) {
    for (const element of form_list) {
        document.getElementById(element).style.display = "none";
    }
    document.getElementById(target_form).style.display = "block";

    for (const element of nav_list) {
        document.getElementById(element).classList.remove("active");
    }
    document.getElementById(bar_id).classList.add("active");
}
console.log("JS loaded");
