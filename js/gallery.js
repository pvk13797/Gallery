function clickImg(e) {
    var view = document.getElementById("appearBox");
    var img = e.src;
    
    document.getElementById("img1").setAttribute("src", img);
    view.style.display = "block";

    document.getElementById("next").addEventListener("click", next);
    document.getElementById("prev").addEventListener("click", prev);

    var x = e.id;

    function next() {
        var gal = document.querySelector("#"+x);
        var nex = gal.nextElementSibling;

        if(nex === null) {
            document.getElementById("img1").setAttribute("src", img);
            x = "l_img1";
        }

        else {
            document.getElementById("img1").setAttribute("src", nex.src);
            x = nex.id;
        }
    }

    function prev() {
        var gal = document.querySelector("#"+x);
        var pre = gal.previousElementSibling;
        var prep = pre.src;
        document.getElementById("img1").setAttribute("src", prep);
        x = pre.id;
    }
}

function clickClose() {
    document.getElementById("appearBox").style.display = "none";
}