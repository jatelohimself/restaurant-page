export default function addHomeElement(parent) {
  const home = document.createElement("div");
  home.setAttribute("id", "home");

  const homeImg = document.createElement("div");
  homeImg.setAttribute("id", "homeImg");
  const img = document.createElement("img");
  img.setAttribute("src", "images/pic1.jpg");
  img.setAttribute("alt", "a plate of rice");
  homeImg.appendChild(img);

  const homeDescription = document.createElement("div");
  homeDescription.setAttribute("id", "home-description");
  const h1Description = document.createElement("h1");
  h1Description.textContent = "We offer the best foods in town";
  const pDescription = document.createElement("p");
  pDescription.textContent = "We offer the best services in a cool environment with very friendly staff members";

  homeDescription.appendChild(h1Description);
  homeDescription.appendChild(pDescription);

  home.appendChild(homeImg);
  home.appendChild(homeDescription);

  parent.innerHTML = "";
  parent.appendChild(home);
}