(function () {
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

  
  var setupWizard = document.querySelector(".setup-wizard");
  var setupCoatWizard = setupWizard.querySelector(".wizard-coat");
  var setupEyeWizard = setupWizard.querySelector(".wizard-eyes");
  var setupFireballWizard = document.querySelector(".setup-fireball-wrap");

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

  function createRandomWizard() {
    var wizard = {
      name: `${
        names[window.mathRandomUtils.getRandomNumber(names.length - 1)]
      } ${
        lastNames[window.mathRandomUtils.getRandomNumber(lastNames.length - 1)]
      }`,
      coatColor:
        coatColors[
          window.mathRandomUtils.getRandomNumber(coatColors.length - 1)
        ],
      eyesColor:
        eyesColors[
          window.mathRandomUtils.getRandomNumber(eyesColors.length - 1)
        ],
    };
    return wizard;
  }

  function renderWizard(wizard) {
    var similarListElement = document.querySelector(".setup-similar-list");
    var similarWizardTemplate = document
      .querySelector("#similar-wizard-template")
      .content.querySelector(".setup-similar-item");

    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector(".setup-similar-label").textContent =
      wizard.name;
    wizardElement.querySelector(".wizard-coat").style.fill = wizard.coatColor;
    wizardElement.querySelector(".wizard-eyes").style.fill = wizard.eyesColor;
    similarListElement.appendChild(wizardElement);
  }

  function changeCoatColor() {
    setupCoatWizard.style.fill =
      coatColors[window.mathRandomUtils.getRandomNumber(coatColors.length - 1)];
  }

  function changeEyeColor() {
    setupEyeWizard.style.fill =
      eyesColors[window.mathRandomUtils.getRandomNumber(eyesColors.length - 1)];
  }

  function changeFireBallColor() {
    setupFireballWizard.style.background =
      fireballColors[
        window.mathRandomUtils.getRandomNumber(fireballColors.length - 1)
      ];
  }
})();