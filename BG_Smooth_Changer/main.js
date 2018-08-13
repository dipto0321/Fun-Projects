let wrap = document.querySelector(".wrap");
let body = document.querySelector("body");
let pageHight = window.innerHeight;
let pageWidth = window.innerWidth;
let screenCssPixelRatio = window.innerWidth;

(function() {
  //   console.log("screenCssPixelRatio: " + screenCssPixelRatio);
  //   console.log("Height: " + pageHight / 2);
  wrap.style.top = pageHight / 2.7 + "px";
  wrap.style.left = pageWidth / 3.6 + "px";
  //   console.log((pageHight / 2).toString());
})();

var rgb1 = [0, 0, 0];
var rgb2 = [255, 255, 255];

function bgChange() {
  //   for (var i = 0; i < 3; i++) {
  //     if (rgb1[0] !== 256) {
  //       rgb1[0] += 1;
  //     } else if (rgb1[1] !== 256) {
  //       rgb1[1] += 1;
  //     } else {
  //       rgb1[2] += 1;
  //     }
  //     if (rgb2[0] !== 0) {
  //       rgb2[0] -= 1;
  //     } else if (rgb2[1] !== 0) {
  //       rgb2[1] -= 1;
  //     } else {
  //       if (rgb2[2] === 0) {
  //         rgb1 = [0, 0, 0];
  //         rgb2 = [255, 255, 255];
  //       } else {
  //         rgb2[2] -= 1;
  //       }
  //     }
  //   }
  var rgb1 = [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255)
  ];
  var rgb1 = [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255)
  ];
  var angel = Math.floor(Math.random() * 360);
  body.style.background = `linear-gradient(${angel}deg,rgb(${rgb1[0]}, ${
    rgb1[1]
  }, ${rgb1[2]}),rgb(${rgb2[0]}, ${rgb2[1]}, ${rgb2[2]}))`;
  console.log(body.style.background);
}
// body.style.background = `linear-gradient(90deg,red,blue)`;
let timerId = setInterval(bgChange, 500);
