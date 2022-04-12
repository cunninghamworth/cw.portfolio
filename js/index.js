/* Variables */


/* Functions */


// Page Proloader

var preloader = document.querySelector(".preloader")

window.addEventListener("load", preloaderVanish);

function preloaderVanish() {
  preloader.classList.add("preloader-disappear");
}

// Side Navigation

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("NavSideMain").style.width = "150px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("NavSideMain").style.width = "0";
  }

/* set the width of the searchbar to 250px */
/* set the width of the searchbar to 0 */



// Modals

const modalBtns = document.getElementsByClassName("btn-modal");
const closeSpans = document.getElementsByClassName("close");
const modals = document.getElementsByClassName("modal-general");

[...modalBtns].forEach((modalBtns, ind) => {
  modalBtns.onclick = () => (modals[ind].style.display = "block");
});

[...closeSpans].forEach((closeSpans, ind) => {
  closeSpans.onclick = () => (modals[ind].style.display = "none");
});

window.onclick = (e) => {
  [...modals].forEach((modals) => {
    if (e.target === modals) {
      modals.style.display = "none";
    }
  });
};

// Adaptive year for copyright footer

document.getElementById("copyright-year").innerHTML = new Date().getFullYear();

