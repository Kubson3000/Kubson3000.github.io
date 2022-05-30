function clear_sidebar() {
    for (var i = 1; i < 19; i++) {
        document.getElementById(i).classList.remove("active");
    }
}
function preview(number) {
    let des = document.getElementById("preview_div");
    clear_sidebar();
    document.getElementById(number).classList.add("active");
    switch(number) {
        case 1:
            des.innerHTML = "<img class=\"cen wha itm\" src=\"./gui/win1.png\" />";
            break;
        case 2:
            des.innerHTML = "<img class=\"cen wha itm\" src=\"./gui/win2.png\" />";
            break;
        case 3:
            des.innerHTML = "<img class=\"cen wha itm\" src=\"./gui/win2.1.png\" />";
            break;
        case 4:
            des.innerHTML = "<img class=\"cen wha itm\" src=\"./gui/win3.png\" />";
            break;
        case 5:
            des.innerHTML = "<img class=\"cen wha itm\" src=\"./gui/win3.1.png\" />";
            break;
        case 6:
            des.innerHTML = "<img class=\"cen wha itm\" src=\"./gui/win_nt3.1.png\" />";
            break;
        case 7:
            des.innerHTML = "<img class=\"cen wha itm\" src=\"./gui/win_nt3.5.png\" />";
            break;
        case 8:
            des.innerHTML = "<img class=\"cen wha itm\" src=\"./gui/win_nt4.0.png\" />";
            break;
        case 9:
            des.innerHTML = "<img class=\"cen wha itm\" src=\"./gui/win98.png\" />";
            break;
        case 10:
            des.innerHTML = "<img class=\"cen wha itm\" src=\"./gui/win2000.png\" />";
            break;
        case 11:
            des.innerHTML = "<img class=\"cen wha itm\" src=\"./gui/win_me.png\" />";
            break;
        case 12:
            des.innerHTML = "<img class=\"cen wha itm\" src=\"./gui/win_xp.png\" />";
            break;
        case 13:
            des.innerHTML = "<img class=\"cen wha itm\" src=\"./gui/win_vista.png\" />";
            break;
        case 14:
            des.innerHTML = "<img class=\"cen wha itm\" src=\"./gui/win7.png\" />";
            break;
        case 15:
            des.innerHTML = "<img class=\"cen wha itm\" src=\"./gui/win8.png\" />";
            break;
        case 16:
            des.innerHTML = "<img class=\"cen wha itm\" src=\"./gui/win8.1.png\" />";
            break;
        case 17:
            des.innerHTML = "<img class=\"cen wha itm\" src=\"./gui/win10.png\" />";
            break;
        case 18:
            des.innerHTML = "<img class=\"cen wha itm\" src=\"./gui/win11.png\" />";
            break;
    }
}