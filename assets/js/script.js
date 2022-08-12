





const dropdown = document.querySelector("#dropdown");

dropdown.style.visibility = "hidden";

document.querySelector("#dropdown__btn").onclick = function() {
    dropdown.style.visibility = "visible";
}

document.querySelector("#dropdown__btn--close").onclick = function() {
    dropdown.style.visibility = "hidden";
}