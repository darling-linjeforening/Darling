// if (window.innerWidth < 960) {
//     const dropdown = document.querySelector("#dropdown");

//     dropdown.style.visibility = "hidden";

//     document.querySelector("#dropdown__btn").onclick = function() {
//         dropdown.style.visibility = "visible";
//     }

//     document.querySelector("#dropdown__btn--close").onclick = function() {
//         dropdown.style.visibility = "hidden";
//     }
// }

// else {
//     dropdown.style.visibility = "visible";

//     document.querySelector("#dropdown__btn").style.visibility = "hidden";

//     document.querySelector("#dropdown__btn--close").style.visibility = "hidden";

// }



//hidden them
// dropdown.style.visibility = "visible";

// document.querySelector("#dropdown__btn").style.visibility = "hidden";

// document.querySelector("#dropdown__btn--close").style.visibility = "hidden";



//det første som funka
// const dropdown = document.querySelector("#dropdown");

// dropdown.style.visibility = "hidden";

// document.querySelector("#dropdown__btn").onclick = function() {
//     dropdown.style.visibility = "visible";
// }

// document.querySelector("#dropdown__btn--close").onclick = function() {
//     dropdown.style.visibility = "hidden";
// }




const mediaQuery = window.matchMedia('(min-width: 768px)')
function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    dropdown.style.visibility = "visible";

    // document.querySelector("#dropdown__btn").style.visibility = "hidden";
    document.querySelector("#dropdown__btn").style.display = "none";

    // document.querySelector("#dropdown__btn--close").style.visibility = "hidden";
    document.querySelector("#dropdown__btn--close").style.display = "none";

    document.querySelector("#dropdown__content").classList.remove("dropdown__content");

    document.querySelector("#dropdown__content").classList.add("dropdown__content--desktop");

    }

  else {
        // Then log the following message to the console
        const dropdown = document.querySelector("#dropdown");

        dropdown.style.visibility = "hidden";

        document.querySelector("#dropdown__content").classList.add("dropdown__content");

        document.querySelector("#dropdown__btn").style.display = "flex";
        document.querySelector("#dropdown__btn--close").style.display = "flex";

        document.querySelector("#dropdown__btn").onclick = function() {
            dropdown.style.visibility = "visible";
        }
    
        document.querySelector("#dropdown__btn--close").onclick = function() {
            dropdown.style.visibility = "hidden";
        }
    }
}


// Register event listener
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery)


document.querySelector("#dropdown__btn--close").onclick = function() {
    dropdown.style.visibility = "hidden";
}


//Function that scroll back to top when 'footerBtn' is clicked
document.getElementById("footerBtn").onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

