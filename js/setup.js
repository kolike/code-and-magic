var wizardSettingsWindow = document.querySelector(".setup");
wizardSettingsWindow.classList.remove("hidden");
document.querySelector(".setup-similar").classList.remove("hidden");

WIZARDS_COUNT = 4;

//mock
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

var getRandomNumber = function (max) {
  var rand = Math.random() * (max + 1);
  return Math.floor(rand);
};

var createRandomWizard = function () {
  var wizard = {
    name: `${names[getRandomNumber(names.length - 1)]} ${
      lastNames[getRandomNumber(lastNames.length - 1)]
    }`,
    coatColor: coatColors[getRandomNumber(coatColors.length - 1)],
    eyesColor: eyesColors[getRandomNumber(eyesColors.length - 1)],
  };

  return wizard;
};

var renderWizard = function (wizard) {
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

for (var i = 0; i < WIZARDS_COUNT; i++) {
  var randomWizard = createRandomWizard();
  renderWizard(randomWizard);
}