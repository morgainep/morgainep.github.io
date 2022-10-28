var h = screen.height;
var w  = screen.width;
animateInfo()

var id = null;
function animateInfo() {
  var elem = document.getElementById("infobox");
  console.log(elem)
  var pos = elem.style.top;
  elem.style.opacity = 0;
  var op  = elem.style.opacity;

  clearInterval(id);
  id = setInterval(frame, 30);
  function frame() {
    if (pos == 30) {
      clearInterval(id);
    } else {
      pos++;
      op = Math.min(op + 0.05, 1)
      elem.style.opacity = op
      if (h > w) {
        elem.style.top = pos + 'px';
      }

    }
  }
}
