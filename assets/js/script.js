// changing navbar according to screen size (media queries) 
const dropdown = document.querySelector("#dropdown");
const dropdownBtn = document.querySelector("#dropdown__btn");
const dropdownBtnClose = document.querySelector("#dropdown__btn--close");
const dropdownContent = document.querySelector("#dropdown__content");

const mediaQuery = window.matchMedia('(min-width: 500px)');

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    dropdown.style.visibility = "visible";
    dropdownBtn.style.display = "none";
    dropdownBtnClose.style.display = "none";

    dropdownContent.classList.remove("dropdown__content");
    dropdownContent.classList.add("dropdown__content--desktop");

    }

  else {
        dropdown.style.visibility = "hidden";

        dropdownContent.classList.add("dropdown__content");

        dropdownBtn.style.display = "flex";
        dropdownBtnClose.style.display = "flex";

        dropdownBtn.onclick = function() {
            dropdown.style.visibility = "visible";
        }
    
        dropdownBtnClose.onclick = function() {
            dropdown.style.visibility = "hidden";
        }
    }
}

// Register event listener
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery)


//Function that scroll back to top when 'footerBtn' is clicked
document.getElementById("footerBtn").onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

