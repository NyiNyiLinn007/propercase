var text   = document.querySelector("#text");
var btn    = document.querySelector("#btn");
var result = document.querySelector("#result")

btn.addEventListener("click",properCase);

function properCase() {
  let ans = text.value.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
  result.innerHTML = ans;
}

