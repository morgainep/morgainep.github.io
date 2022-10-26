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

  var home = document.createElement('li');
  var linkHome = document.createElement('a');
  linkHome.href = "index.html";
  linkHome.appendChild(document.createTextNode("HOME"));
  home.appendChild(linkHome);
  mainlist.appendChild(home);

  var portfolio = document.createElement('li');
  var linkPortfolio = document.createElement('a');
  linkPortfolio.href = "";
  linkPortfolio.appendChild(document.createTextNode("PORTFOLIO"));
  portfolio.appendChild(linkPortfolio);
  mainlist.appendChild(portfolio);

  var sublist = document.createElement('ul');
  sublist.classList.add("submenu");

  var sli1 = document.createElement('li');
  var linkSli1 = document.createElement('a');
  linkSli1.href = "portfolio/1.html";
  linkSli1.appendChild(document.createTextNode("POPRONDE UTRECHT"));
  sli1.appendChild(linkSli1);
  sublist.appendChild(sli1);

  var sli2 = document.createElement('li');
  var linkSli2 = document.createElement('a');
  linkSli2.href = "";
  linkSli2.appendChild(document.createTextNode("DAVID ROOKER"));
  sli2.appendChild(linkSli2);
  sublist.appendChild(sli2);

  var sli3 = document.createElement('li');
  var linkSli3 = document.createElement('a');
  linkSli3.href = "";
  linkSli3.appendChild(document.createTextNode("JAPAN"));
  sli3.appendChild(linkSli3);
  sublist.appendChild(sli3);

  portfolio.appendChild(sublist);

  var about = document.createElement('li');
  var linkAbout = document.createElement('a');
  linkAbout.href = "about.html";
  linkAbout.appendChild(document.createTextNode("ABOUT"));
  about.appendChild(linkAbout);
  mainlist.appendChild(about);

  var contact = document.createElement('li');
  var linkContact = document.createElement('a');
  linkContact.href = "contact.html";
  linkContact.appendChild(document.createTextNode("CONTACT"));
  contact.appendChild(linkContact);
  mainlist.appendChild(contact);

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

  addMenuItems(hambList);

  hambMenu.appendChild(hambList);
  document.body.appendChild(hambMenu);

}

function addMenuItems(m) {
  var home = document.createElement('li');
  var linkHome = document.createElement('a');
  linkHome.href = "index.html";
  linkHome.appendChild(document.createTextNode("HOME"));
  home.appendChild(linkHome);
  m.appendChild(home);

  var portfolio = document.createElement('li');
  var linkPortfolio = document.createElement('a');
  linkPortfolio.href = "";
  linkPortfolio.appendChild(document.createTextNode("PORTFOLIO"));
  portfolio.appendChild(linkPortfolio);
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
    x.style.maxHeight = "200px";
  } else {
    x.style.maxHeight = "0px";
  }
}
