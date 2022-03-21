{
    var s_zero = '<article><p> Select a  game</p><header><div id="middle_top"></div></header><section><div id="middle_bottom"></div></section></article >';
    var blank = '<article><header><div id="middle_top"></div></header><section><div id="middle_bottom"></div></section></article >';
    var senu = '" src="https://static.wikia.nocookie.net/f9b8d9fa-9a01-4a7d-8e86-a07eab3b3ca1/scale-to-width/755" />';
    var s_one_top = '" src="https://www.youtube.com/embed/XHrskkHf958" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    var s_one_bottom = 'The Witcher 3: Wild Hunt is the third and final installment in the series of games developed by CD Projekt RED featuring the witcher Geralt of Rivia. The game was originally scheduled for release in late 2014, then pushed back to 24 February 2015, and finally released on 19 May 2015. During the first two weeks since release it had sold more than 4 million copies worldwide, more than doubling the total sales of its predecessor, The Witcher 2: Assassins of Kings.';
    var s_two_top = '" src="https://www.youtube.com/embed/gmA6MrX81z4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    var s_two_bottom = 'Red Dead Redemption 2 (stylized as Red Dead Redemption II) is a western-themed action-adventure video game developed and published by Rockstar Games. It is the third entry in the Red Dead series and a prequel to 2010\'s Red Dead Redemption and was released on October 26th, 2018 on PlayStation 4, Xbox One and on November 5th, 2019 for PC.';
    var s_three_top = '" src="https://www.youtube.com/embed/qPNiIeKMHyg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    var s_three_bottom = 'The Last of Us Part II is a third-person action-adventure, survival horror video game developed by Naughty Dog and published by Sony Interactive Entertainment. It was released on June 19, 2020. The game is the sequel to The Last of Us and picks up the story of Ellie and Joel five years after the events of the original game.';
    var s_four_top = '" src="https://www.youtube.com/embed/QD1pbWCJcKQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    var s_four_bottom = 'Detroit: Become Human is the latest title developed by Quantic Dream that expands on the studio’s legacy of gripping, narrative driven experiences (Fahrenheit/Heavy Rain™/BEYOND: Two Souls™). Discover what it really means to be human in a powerful, emotional journey made of choice and consequences. In this ambitiously bending and thrilling narrative, every choice and action not only determines the character’s fate, but that of the entire city and possibly beyond.';
    var s_five_top = '" src="https://www.youtube.com/embed/vkI3aatK6Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    var s_five_bottom = 'You woke up one day with a dream: a harem full of demon girls. You\'ve opened the portal in hopes of fulfilling your wildest desires.Hellfire burns through your lungs, death awaits around every corner and everything looks like from a cutesy mobile game.You are in hell.';
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
    let wid = document.getElementById("middle").offsetWidth - 20;
    var hei = Math.round(wid * 0.5625);
    var beg = '<iframe width="' + wid + '" height="' + hei;
    if (div.style.border == "inset") {
        div.style.border = 'none';
        out.innerHTML = s_zero;
    }
    else {
        out.innerHTML = blank;
        let top = document.getElementById('middle_top');
        let bottom = document.getElementById('middle_bottom');
        clear();
        div.style.border = "inset";
        switch (name) {
            case 'one':
                top.innerHTML = beg + s_one_top;
                bottom.innerHTML = s_one_bottom;
                break;
            case 'two':
                top.innerHTML = beg + s_two_top;
                bottom.innerHTML = s_two_bottom;
                break;
            case 'three':
                top.innerHTML = beg + s_three_top;
                bottom.innerHTML = s_three_bottom;
                break;
            case 'four':
                top.innerHTML = beg + s_four_top;
                bottom.innerHTML = s_four_bottom;
                break;
            case 'five':
                top.innerHTML = beg + s_five_top;
                bottom.innerHTML = s_five_bottom;
                break;
            default:
                console.log("Well then... ", name);
                break;
        }
    }
}
function t() {
    let inp = document.getElementById("input").value;
    var hash = cyrb53(inp);
    if (hash == 8162197328456600) {
        let ok = document.getElementById("right_space");
        var ok_wi = ok.offsetWidth - ok.offsetWidth * 0.03;
        var lef = '<img height="' + ok_wi + 'px" width="' + ok_wi + 'px';
        for (var i = 0; i < 50; i++) {
            ok.innerHTML = '';
            ok.innerHTML += lef + senu;
        }
    }
    else {
        let no_ok = document.getElementById("right_space");
        no_ok.innerHTML += "<p>Too BAD</p>";
    }
}
const cyrb53 = function (str, seed = 0) {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};