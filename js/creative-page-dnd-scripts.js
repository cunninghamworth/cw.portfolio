

function navToolsToggle() {
  var navOptionTools = document.getElementById("nav-tools");
  var navOptionHomebrew = document.getElementById("nav-homebrew");
  var navOptionAdventures = document.getElementById("nav-adventures");
  if (navOptionTools.style.display === "block") {
      navOptionTools.style.display = "none";
      navOptionHomebrew.style.display = "none";
      navOptionAdventures.style.display = "none";
  } else {
      navOptionTools.style.display = "block";
      navOptionHomebrew.style.display = "none";
      navOptionAdventures.style.display = "none";
  }
  
}

function navHomebrewToggle() {
  var navOptionTools = document.getElementById("nav-tools");
  var navOptionHomebrew = document.getElementById("nav-homebrew");
  var navOptionAdventures = document.getElementById("nav-adventures");
  if (navOptionHomebrew.style.display === "block") {
      navOptionHomebrew.style.display = "none";
      navOptionTools.style.display = "none";
      navOptionAdventures.style.display = "none";
  } else {
      navOptionHomebrew.style.display = "block";
      navOptionTools.style.display = "none";
      navOptionAdventures.style.display = "none";
  }
  
}

function navAdventuresToggle() {
  var navOptionTools = document.getElementById("nav-tools");
  var navOptionHomebrew = document.getElementById("nav-homebrew");
  var navOptionAdventures = document.getElementById("nav-adventures");
  if (navOptionAdventures.style.display === "block") {
      navOptionAdventures.style.display = "none";
      navOptionHomebrew.style.display = "none";
      navOptionTools.style.display = "none";
  } else {
      navOptionAdventures.style.display = "block";
      navOptionHomebrew.style.display = "none";
      navOptionTools.style.display = "none";
  }
  
}







