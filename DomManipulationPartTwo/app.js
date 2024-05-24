//MenuLinks
const menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
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

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.background = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

const topMenuLinks = document.querySelectorAll("a");
console.log(topMenuLinks);

topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  } else {
    //console.log(event.target);
    topMenuLinks.forEach((a) => a.classList.remove("active"));
    mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
    event.target.classList.toggle("active");

    if (event.target.classList.contains("active")) {
      const currentLink = event.target.innerHTML;
      menuLinks.forEach((link) => {
        if (link.text === currentLink) {
          if (link.hasOwnProperty("subLinks")) {
            subMenuEl.style.top = "100%";
            buildSubMenuEl(link.subLinks);
          } else {
            subMenuEl.style.top = "0";
          }
        }
      });
    }
  }
});

function buildSubMenuEl(array) {
  subMenuEl.innerHTML = "";
  array.forEach((link) => {
    let aEl = document.createElement("a");
    aEl.setAttribute("href", link.href);
    aEl.innerHTML = link.text;
    subMenuEl.append(aEl);
  });
}

subMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (!event.target.matches("a")) {
    return;
  } else {
    // console.log(event.target);
    subMenuEl.style.top = "0";
    topMenuLinks.forEach((link) => link.classList.remove("active"));
    mainEl.innerHTML = `<h1>${event.target.innerHTML}</h1>`;
  }
});
