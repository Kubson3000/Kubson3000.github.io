window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // you're at the bottom of the page
        document.getElementById("funny").innerHTML += "<img src=\"./5.png\"/> <br>";
    }
};
