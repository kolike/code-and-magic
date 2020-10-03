(function () {
  window.mathRandomUtils = {
    getRandomNumber: function (max) {
      var rand = Math.random() * (max + 1);
      return Math.floor(rand);
    }
  };
})();
