let light = document.querySelectorAll('.light');


function turnOn() {
  light[0].style.background = "red"
  light[1].style.background = "#111"
  light[2].style.background = "#111"
  setTimeout(() => {
    light[0].style.background = "red"
    light[1].style.background = "yellow"
    light[2].style.background = "#111"
  }, 3000);
  setTimeout(() => {
    light[0].style.background = "#111"
    light[1].style.background = "#111"
    light[2].style.background = "green"
  }, 4000);
}
turnOn()
setInterval(turnOn, 10000);