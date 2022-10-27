let height = screen.height;
let width  = screen.width;
if (width > height) {
  createSidebar()
} else {
  createHambMenu()
}

function createSidebar() {
  var sidebar = document.createElement('div');
  sidebar.classList.add("sidebar");
  var menu = document.createElement('div');
  menu.id = "menu";
  var mainlist = document.createElement('ul');

  addMenuItems(mainlist, false);

  menu.appendChild(mainlist);
  sidebar.appendChild(menu);

  document.body.appendChild(sidebar);
}

function createHambMenu() {
  var hambMenu = document.createElement('div');
  hambMenu.id = "hambMenu";

  var menuButton = document.createElement('a');
  menuButton.classList.add("icon");
  menuButton.href = "javascript:void(0);";
  menuButton.onclick = hambClick;

  var menuIcon = document.createElement('ion-icon');
  menuIcon.name = "menu-outline";
  menuButton.appendChild(menuIcon);

  hambMenu.appendChild(menuButton);

  var hambList = document.createElement('ul')
  hambList.id = "hambList";

  addMenuItems(hambList, true);

  hambMenu.appendChild(hambList);
  document.body.appendChild(hambMenu);

}

function addMenuItems(m, flag) {
  var home = document.createElement('li');
  var linkHome = document.createElement('a');
  linkHome.href = "index.html";
  linkHome.appendChild(document.createTextNode("HOME"));
  home.appendChild(linkHome);
  m.appendChild(home);

  var portfolio = document.createElement('li');
  var linkPortfolio = document.createElement('a');
  linkPortfolio.href = "javascript:void(0);";
  linkPortfolio.appendChild(document.createTextNode("PORTFOLIO"));
  portfolio.appendChild(linkPortfolio);
  makeSubmenu(portfolio, flag);
  m.appendChild(portfolio);

  var about = document.createElement('li');
  var linkAbout = document.createElement('a');
  linkAbout.href = "about.html";
  linkAbout.appendChild(document.createTextNode("ABOUT"));
  about.appendChild(linkAbout);
  m.appendChild(about);

  var contact = document.createElement('li');
  var linkContact = document.createElement('a');
  linkContact.href = "contact.html";
  linkContact.appendChild(document.createTextNode("CONTACT"));
  contact.appendChild(linkContact);
  m.appendChild(contact);
}

function hambClick() {
  var x = document.getElementById("hambList");
  var hambMenu = document.getElementById("hambMenu");
  if (x.style.maxHeight == "0px") {
    x.style.maxHeight = "100vh";
  } else {
    x.style.maxHeight = "0px";
  }
}

function makeSubmenu(el, flag) {
  var sublist = document.createElement('ul');
  sublist.classList.add("submenu");

  var sli1 = document.createElement('li');
  var linkSli1 = document.createElement('a');
  linkSli1.href = "popronde-u.html";
  linkSli1.appendChild(document.createTextNode("POPRONDE UTRECHT"));
  sli1.appendChild(linkSli1);
  sublist.appendChild(sli1);

  var sli2 = document.createElement('li');
  var linkSli2 = document.createElement('a');
  linkSli2.href = "david-rooker.html";
  linkSli2.appendChild(document.createTextNode("DAVID ROOKER"));
  sli2.appendChild(linkSli2);
  sublist.appendChild(sli2);

  var sli3 = document.createElement('li');
  var linkSli3 = document.createElement('a');
  linkSli3.href = "";
  linkSli3.appendChild(document.createTextNode("JAPAN"));
  sli3.appendChild(linkSli3);
  sublist.appendChild(sli3);

  el.appendChild(sublist);
  if (flag) {
    el.onclick = function() {portfClick(sublist)}
  }
}

function portfClick(sublist){
  if (sublist.style.maxHeight == "0px") {
    sublist.style.maxHeight = "400px";
  } else {
    sublist.style.maxHeight = "0px";
  }
}
