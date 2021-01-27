(function () {
  var setupDialogElement = document.querySelector(".setup");
  var dialogHandler = setupDialogElement.querySelector(".upload");
  var setupOpen = document.querySelector(".setup-open");
  var setupClose = document.querySelector(".setup-close");
  var setupUserName = document.querySelector(".setup-user-name");
  var isSetupUserNameFocused = false;
  var coords = [];

  dialogHandler.addEventListener("mousedown", function (evt) {
    evt.preventDefault();
    findCoordOnClick();

    var dragged = false;

    var coord = {
      x: evt.clientX,
      y: evt.clientY,
    };

    function onMouseMove(moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: coord.x - moveEvt.clientX,
        y: coord.y - moveEvt.clientY,
      };

      coord = {
        x: moveEvt.clientX,
        y: moveEvt.clientY,
      };

      setupDialogElement.style.top =
        setupDialogElement.offsetTop - shift.y + "px";
      setupDialogElement.style.left =
        setupDialogElement.offsetLeft - shift.x + "px";
    }

    function onMouseUp(upEvt) {
      upEvt.preventDefault();

      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);

      if (dragged) {
        function onCLickPreventDefault(evt) {
          evt.preventDefault();
          dialogHandler.removeEventListener("click", onCLickPreventDefault);
        }
        dialogHandler.addEventListener("click", onCLickPreventDefault);
      }
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });

  setupUserName.addEventListener("focus", function () {
    isSetupUserNameFocused = true;
  });

  setupUserName.addEventListener("blur", function () {
    isSetupUserNameFocused = false;
  });

  function openPopup() {
    setupDialogElement.classList.remove("hidden");
    document.addEventListener("keydown", onKeydown);
  }

  function closePopup() {
    setupDialogElement.classList.add("hidden");
    document.removeEventListener("keydown", onKeydown);
    resetPopupPosition(coords);
  }

  setupOpen.addEventListener("keydown", function (evt) {
    if (window.keyboardUtils.isEnterKey(evt.keyCode)) {
      openPopup();
    }
  });

  setupOpen.addEventListener("click", function () {
    openPopup();
  });

  setupClose.addEventListener("click", function () {
    closePopup();
  });

  setupClose.addEventListener("keydown", function (evt) {
    if (window.keyboardUtils.isEnterKey(evt.keyCode)) {
      closePopup();
    }
  });

  function onKeydown(evt) {
    if (window.keyboardUtils.isEscKey(evt.keyCode) && !isSetupUserNameFocused) {
      closePopup();
    }
  }

  function resetPopupPosition(arr) {
    var startCoordY = arr[0].y;
    var startCoordX = arr[0].x;

    setupDialogElement.style.top = startCoordY;
    setupDialogElement.style.left = startCoordX;

    coords = [];
  }

  function findCoordOnClick() {
    startCoords = {
      x: setupDialogElement.offsetLeft + "px",
      y: setupDialogElement.offsetTop + "px",
    };

    coords.push({
      x: [startCoords.x],
      y: [startCoords.y],
    });
  }
})();
