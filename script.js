const menu = document.querySelector(".menu");
var click = 1;
function hidemenu() {
  if (click % 2 == 0) menu.style.display = "none";
  else menu.style.display = "flex";
  click++;
}
var result;
const fetchURL = async () => {
  var linkform = document.querySelector("#link");
  var url = linkform.value;
  const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
  link = await res.json();
  var shortlink = link.result.short_link;
  result = shortlink;
  const short = document.querySelector(".shortener");
  const shortlinks = document.querySelector(".shortlinks");
  shortlinks.innerHTML = shortlink;
  const copybutton = document.querySelector("#copybutton");
  copybutton.innerHTML = `Copy`;
  short.style.display = "inherit";
};
function copyURL() {
  const copybutton = document.querySelector("#copybutton");
  copybutton.innerHTML = `Copied!`;

  navigator.clipboard.writeText(result);
}
