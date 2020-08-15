WIZARDS_COUNT = 4;

// Mocks

var names = [
  "Anakin",
  "Benedict",
  "Darth",
  "Jon",
  "Jason",
  "Geralt",
  "Nikolay",
];

var lastNames = [
  "Skywalker",
  "Kamberbutch",
  "Shvedus",
  "Snow",
  "Statham",
  "of Rivia",
  "fon Petroff",
];

var coatColors = [
  "rgb(101, 137, 164)",
  "rgb(241, 43, 107)",
  "rgb(146, 100, 161)",
  "rgb(56, 159, 117)",
  "rgb(215, 210, 55)",
  "rgb(0, 0, 0)",
];

var eyesColors = [
  "black",
  "red",
  "blue",
  "yellow",
  "green",
  "purple",
  "white",
  "brown",
];

var fireballColors = ["#ee4830", "#30a8ee", "#5ce6c0", "#e848d5", "#e6e848"];

var wizardSettingsWindow = document.querySelector(".setup");
var setupOpen = document.querySelector(".setup-open");
var setupClose = document.querySelector(".setup-close");
var setupUserName = document.querySelector(".setup-user-name");
var setupWizard = document.querySelector(".setup-wizard");
var setupCoatWizard = setupWizard.querySelector(".wizard-coat");
var setupEyeWizard = setupWizard.querySelector(".wizard-eyes");
var setupFireballWizard = document.querySelector(".setup-fireball-wrap");
var isSetupUserNameFocused = false;

setupUserName.addEventListener("focus", function () {
  isSetupUserNameFocused = true;
});

setupUserName.addEventListener("blur", function () {
  isSetupUserNameFocused = false;
});

setupOpen.addEventListener("click", function () {
  openPopup();
});

setupOpen.addEventListener("keydown", function (evt) {
  if (isEnterKey(evt.keyCode)) {
    openPopup();
  }
});

setupClose.addEventListener("click", function () {
  closePopup();
});

setupClose.addEventListener("keydown", function (evt) {
  if (isEnterKey(evt.keyCode)) {
    closePopup();
  }
});

setupCoatWizard.addEventListener("click", function () {
  changeCoatColor();
});

setupEyeWizard.addEventListener("click", function () {
  changeEyeColor();
});

setupFireballWizard.addEventListener("click", function () {
  changeFireBallColor();
});

for (var i = 0; i < WIZARDS_COUNT; i++) {
  var randomWizard = createRandomWizard();
  renderWizard(randomWizard);
}

document.querySelector(".setup-similar").classList.remove("hidden");

function getRandomNumber(max) {
  var rand = Math.random() * (max + 1);
  return Math.floor(rand);
};

function createRandomWizard() {
  var wizard = {
    name: `${names[getRandomNumber(names.length - 1)]} ${
      lastNames[getRandomNumber(lastNames.length - 1)]
    }`,
    coatColor: coatColors[getRandomNumber(coatColors.length - 1)],
    eyesColor: eyesColors[getRandomNumber(eyesColors.length - 1)],
  };

  return wizard;
};

function renderWizard(wizard) {
  var similarListElement = document.querySelector(".setup-similar-list");
  var similarWizardTemplate = document
    .querySelector("#similar-wizard-template")
    .content.querySelector(".setup-similar-item");

  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(".setup-similar-label").textContent = wizard.name;
  wizardElement.querySelector(".wizard-coat").style.fill = wizard.coatColor;
  wizardElement.querySelector(".wizard-eyes").style.fill = wizard.eyesColor;
  similarListElement.appendChild(wizardElement);
};

function onKeydown(evt) {
  if (isEscKey(evt.keyCode) && !isSetupUserNameFocused) {
    closePopup();
  }
}

function openPopup() {
  wizardSettingsWindow.classList.remove("hidden");
  document.addEventListener("keydown", onKeydown);
}

function closePopup() {
  wizardSettingsWindow.classList.add("hidden");
  document.removeEventListener("keydown", onKeydown);
}

function changeCoatColor() {
  setupCoatWizard.style.fill =
    coatColors[getRandomNumber(coatColors.length - 1)];
}

function changeEyeColor() {
  setupEyeWizard.style.fill =
    eyesColors[getRandomNumber(eyesColors.length - 1)];
}

function changeFireBallColor() {
  setupFireballWizard.style.background =
    fireballColors[getRandomNumber(fireballColors.length - 1)];
}

function isEscKey(keyCode) {
  return keyCode === 27;
}

function isEnterKey(keyCode) {
  return keyCode === 13;
}