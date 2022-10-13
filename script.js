// var url;
// const shortener = document.querySelector(".shortener");
// const originalURL = document.querySelector(".shortlinks");
// const copybutton = document.querySelector("#copybutton");
// var link;
// const fetchURL = async () => {
//   var linkform = document.querySelector("#link");
//   url = linkform.value;
//   const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
//    link = await res.json();
// };
// function showURL() {
//   fetchURL();
//   var result = link.result.short_link;
//   shortener.style.display = "flex";
//   originalURL.innerHTML = result;
//   copybutton.innerHTML = "Copied";
//   console.log(result);
// }
const menu = document.querySelector(".menu");
var click = 0;
function hidemenu() {
  if (click % 2 == 0) menu.style.display = "none";
  else menu.style.display = "flex";
  click++;
}

const linkcard = document.querySelector(".shortener");

function showbutton() {
  linkcard.style.display = "inherit";
}
