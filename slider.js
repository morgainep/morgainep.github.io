var images   = []
var captions = []
var caps     = []

var img;
var imgwrap;

function loadImages(source, max) {
  var carousel = document.getElementById("carousel")
  let c = 0;
  while(c < max) {
    img = new Image();
    img.src = source + "/IMG_" + c + ".jpg";
    imgwrap = document.createElement('div');
    imgwrap.classList.add('imgwrap');
    //var cap = document.createElement('div');
    //cap.classList.add('imgcaption');
    //content = document.createTextNode(captions[i])
    imgwrap.appendChild(img);
    carousel.appendChild(imgwrap);
    c++
  }
    /*imgwrap.appendChild(cap);
    caps.push(cap)
    images[i].id = i+'img';
    (images[i]).onmouseenter = function(event) {imgMouseOver(event)};
    (images[i]).onmouseleave = function(event) {imgMouseLeave(event)};*/
    //carousel.appendChild(imgwrap);
    //i++
}

/*var img1 = new Image();
img1.src = "images/IMG_5341.jpg";
images.push(img1);
//var captxt1 = "HEADFIRST IN DB'S";
//captions.push(captxt1)

var img2 = new Image();
img2.src = "images/IMG_5409.jpg";
images.push(img2);
//var captxt2 = "HEADFIRST IN DB'S";
//captions.push(captxt2)

var img3 = new Image();
img3.src = "images/IMG_5487.jpg";
images.push(img3);
//var captxt3 = "DE TOEGIFT IN EKKO";
//captions.push(captxt3)*/


function imgMouseOver(e) {
  var curImg = e.currentTarget;
  var index = parseInt((curImg.id)[0]);
  var el = caps[index];
  el.style.display = "block"
}

function imgMouseLeave(e) {
  var curImg = e.currentTarget;
  var index = parseInt((curImg.id)[0]);
  var el = caps[index];

  el.style.display = "none"
}
