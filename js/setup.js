var wizardSettingsWindow = document.querySelector(".setup");
wizardSettingsWindow.classList.remove("hidden");
document.querySelector(".setup-similar").classList.remove("hidden");

//mock
var names = [
  "Anakin ",
  "Benedict ",
  "Darth ",
  "Jon ",
  "Jason ",
  "Geralt ",
  "Nikolay ",
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

var eyesColors = ["black", "red", "blue", "yellow", "green",'purple', 'white', 'brown'];

var wizards = [];

var randomNumber = function (max) {
  var rand = Math.random() * (max + 1);
  return Math.floor(rand);
};

var createRandomWizard = function (quantity) {
  wizards[quantity] = {
    name:
      names[randomNumber(names.length - 1)] +
      lastNames[randomNumber(lastNames.length - 1)],
    coatColor: coatColors[randomNumber(coatColors.length - 1)],
    eyesColor: eyesColors[randomNumber(eyesColors.length - 1)],
  };
};
var renderWizard = function (index) {
  var similarListElement = document.querySelector(".setup-similar-list");
  var similarWizardTemplate = document
    .querySelector("#similar-wizard-template")
    .content.querySelector(".setup-similar-item");

  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(".setup-similar-label").textContent =
    wizards[index].name;
  wizardElement.querySelector(".wizard-coat").style.fill = wizards[index].coatColor;
  wizardElement.querySelector(".wizard-eyes").style.fill = wizards[index].eyesColor;
  similarListElement.appendChild(wizardElement);
};

for (var i = 0; i < 4; i++) {
  createRandomWizard(i);
  renderWizard (i);
}