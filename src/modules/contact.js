export default function addContactElements(parent) {
  const contactDetails = document.createElement("h1");
  contactDetails.setAttribute("class", "contact-detail");
  contactDetails.textContent = "Contact Us";

  const contact = document.createElement("div");
  contact.setAttribute("id", "contact");

  const contactP = document.createElement("p");
  contactP.textContent = "Contact us at: +254701803444"
  contact.appendChild(contactP);

  parent.innerHTML = "";
  parent.appendChild(contactDetails);
  parent.appendChild(contact);
}