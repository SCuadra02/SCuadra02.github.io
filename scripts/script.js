// Abrir y cerrar popup
const popup = document.querySelector(".popup");
const pageMask = document.querySelector(".page_mask");

const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__btn-close");

function openPopup(e) {
  popup.classList.add("popup_opened");
  pageMask.classList.add("page_mask_opened");
}

function closePopup(e) {
  popup.classList.remove("popup_opened");
  pageMask.classList.remove("page_mask_opened");
}

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);

// Texto en el value del input
const username = document.querySelector(".profile__name");
const userAboutMe = document.querySelector(".profile__about-me");

const fullName = document.querySelector("#name");
const aboutMe = document.querySelector("#about-me");

fullName.setAttribute("value", username.textContent);
aboutMe.setAttribute("value", userAboutMe.textContent);

console.log(username.textContent);
console.log(userAboutMe.textContent);

// Formulario
const formElement = document.querySelector(".popup__container");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  // Busquemos los campos del formulario en el DOM
  const nameInput = document.querySelector("#name");
  const jobInput = document.querySelector("#about-me");

  // Obtén los valores de cada campo desde la propiedad de valor correspondiente
  nameValue = nameInput.value;
  jobValue = jobInput.value;

  // Selecciona los elementos donde se introducirán los valores de los campos
  username.textContent = nameValue;
  userAboutMe.textContent = jobValue;
  closePopup();
}

formElement.addEventListener("submit", handleProfileFormSubmit);

// Rellenar corazon al hacer click
const heartButton = document.querySelectorAll(".card__heart");

heartButton.forEach((heart) => {
  heart.addEventListener("click", function handleLikeButton(event) {
    heart.classList.toggle("card__heart_liked");
  });
});
