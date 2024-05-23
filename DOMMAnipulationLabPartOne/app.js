//MenuLinks
const menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

//Retrieve and store main
const mainEl = document.querySelector("main");

//Change the main elements background color
mainEl.style.background = "var(--main-bg)";

//Inject an h1 with text into main
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

//Add a class to main
mainEl.classList.add("flex-ctr");

//Retrieve and store the nav
const topMenuEl = document.getElementById("top-menu");

//Change the height of the nav
topMenuEl.style.height = "100%";

//Change the background color of the nav
topMenuEl.style.background = "var(--top-menu-bg)";

//Add a class to tnav
topMenuEl.classList.add("flex-around");

//Iterate through the menuLinks Array
menuLinks.forEach((linkObj) => {
  //For each link object
  //console.log(linkObj);
  //Create an a element
  const aEl = document.createElement("a");
  // Set a's href attribute to the linkObj.href
  aEl.setAttribute("href", linkObj.href);
  // Set the text to linkObj.text
  aEl.textContent = linkObj.text;
  //Append a to the nav
  topMenuEl.append(aEl);
});
