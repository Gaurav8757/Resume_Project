// SMOOH SCROLLING NAVMENU CLICK
var navMenuAnchorTags = document.querySelectorAll(".nav-menu a");

var interval;

for (var i = 0; i < navMenuAnchorTags.length; i++) {
  navMenuAnchorTags[i].addEventListener("click", function (event) {
    event.preventDefault();
    var targetSectionID = this.getAttribute("href");
    var targetSection = document.querySelector(targetSectionID);
    interval = setInterval(function () {
      scrollVertically(targetSection);
    }, 30);
  });
}

function scrollVertically(targetSection) {
  var targetSectionCoodinates = targetSection.getBoundingClientRect();
  if (targetSectionCoodinates.top <= 0) {
    clearInterval(interval);
    return;
  }
  window.scrollBy(0, 50);
}
// Autofill skill bar
// var progressBar = document.querySelectorAll(".skill-progress > div");
// var skillDisplay = document.getElementById("skill-container");
// window.addEventListener("scroll", checkScroll);
// var animateDone = false;

// function initialiseBars() {
//   for (let bar of progressBar) {
//     bar.style.width = 0 + "%";
//   }
// }
// initialiseBars();

// function fillBars() {
//   for (let bar of progressBar) {
//     let targetWidth = bar.getAttribute("data-bar-width");
//     let currentWidth = 0;
//     let interval = setInterval(function () {
//       if (currentWidth >= targetWidth) {
//         clearInterval(interval);
//         return;
//       }
//       currentWidth++;
//       bar.style.width = currentWidth + "%";
//     }, 2);
//   }
// }

// function checkScroll() {
//   var coordinates = skillDisplay.getBoundingClientRect();
//   if (!animateDone && coordinates.top <= window.innerHeight) {
//     animateDone = true;
//     fillBars();
//   } else if (coordinates.top > window.innerHeight) {
//     animateDone = false;
//     initialiseBars();
//   }
// }

var progressBars = document.querySelectorAll(".skill-progress > div");
function initialiseBar(bar) {
  bar.setAttribute("data-visited", false);
  bar.style.width = 0 + "%";
}
for (var bar of progressBars) {
  initialiseBar(bar);
}
function fillBar(bar) {
  var currentWidth = 0;
  var targetWidth = bar.getAttribute("data-bar-width");
  var interval = setInterval(function () {
    if (currentWidth >= targetWidth) {
      clearInterval(interval);
      return;
    }
    currentWidth++;
    bar.style.width = currentWidth + "%";
  }, 5);
}
// This function uses a for loop for individual progress bars.
function checkScroll() {
  for (let bar of progressBars) {
    var barCoordinates = bar.getBoundingClientRect();
    if (
      bar.getAttribute("data-visited") == "false" &&
      barCoordinates.top <= window.innerHeight - barCoordinates.height
    ) {
      bar.setAttribute("data-visited", true);
      fillBar(bar);
    } else if (barCoordinates.top > window.innerHeight) {
      bar.setAttribute("data-visited", false);
      initialiseBar(bar);
    }
  }
}

window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);
