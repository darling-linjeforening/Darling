





const dropdown = document.querySelector("#dropdown");

dropdown.style.visibility = "hidden";

document.querySelector("#dropdown__btn").onclick = function() {
    dropdown.style.visibility = "visible";
}

document.querySelector("#dropdown__btn--close").onclick = function() {
    dropdown.style.visibility = "hidden";
}


//Function that scroll back to top when 'footerBtn' is clicked
document.getElementById("footerBtn").onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}