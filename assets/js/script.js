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

    // switching classes depending on desktop and mobile
    dropdownContent.classList.remove("dropdown__content");
    dropdownContent.classList.add("dropdown__content--desktop");
    }

  else {
        dropdown.style.visibility = "hidden";

        dropdownContent.classList.add("dropdown__content");

        dropdownBtn.style.display = "inline";
        dropdownBtnClose.style.display = "block";

        // show menu when clicking on the hamburger menu
        dropdownBtn.onclick = function() {
            dropdown.style.visibility = "visible";
        }
    
        // hide menu when clicking on the cross
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

