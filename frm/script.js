let form_list = ["one", "two", "three", "four", "five"];
let nav_list = ["t_one", "t_two", "t_three", "t_four", "t_five"];
window.onload = function() {
    for (const element of form_list) {
        document.getElementById(element).style.display = "none";
    }
    document.getElementById("four").style.display = "block";
    document.getElementById("t_four").classList.add("active");
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