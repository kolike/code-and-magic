var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 20;
var BAR_HIGHT = 150;
var BAR_WIDTH = 40;
var GAP_BETWEEN_BAR = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, "rgba(0, 0, 0, 0.7");
  renderCloud(ctx, CLOUD_X, CLOUD_Y, "#fff");

  ctx.fillStyle = "#000";

  var maxTime = getMaxElement(times);

  ctx.font = "16px PT Mono";
  ctx.fillText("Ура, вы победили!", CLOUD_X + GAP, CLOUD_Y + GAP * 3);
  ctx.fillText("Список результатов: ", CLOUD_X + GAP, CLOUD_Y + GAP * 5);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(
      players[i],
      CLOUD_X + GAP * 3 + (GAP_BETWEEN_BAR + BAR_WIDTH) * i, //но лучше выглядит - (CLOUD_WIDTH / players.length), равномернее
      CLOUD_HEIGHT - GAP
    );
    var randomTransparency = Math.floor(Math.random() * 10) / 10;
    if (players[i] == "Вы") {
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
    } else {
      ctx.fillStyle = `rgba(0, 0, 255, ${Math.random()})`;
    }
    ctx.fillRect(
      CLOUD_X + GAP * 3 + (GAP_BETWEEN_BAR + BAR_WIDTH) * i,
      CLOUD_HEIGHT - GAP * 3,
      BAR_WIDTH,
      -(BAR_HIGHT * times[i]) / maxTime
    );
    ctx.fillStyle = "#000";
    ctx.fillText(
      Math.floor(times[i]),
      CLOUD_X + GAP * 3 + (GAP_BETWEEN_BAR + BAR_WIDTH) * i,
      -((BAR_HIGHT * times[i]) / maxTime) + CLOUD_HEIGHT - GAP * 4
    );
  }
};
