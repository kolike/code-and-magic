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
var CLOUD_SHADOW_X = 110;
var CLOUD_SHADOW_Y = 20;
var ACTIVE_PLAYER = "Вы";

var drawCloud = function (ctx, x, y, color) {
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

var drawName = function (ctx, players, x, y) {
  ctx.fillText(players, x, y);
};

var drawBar = function (ctx, x, y, width, height, player) {
  if (player == ACTIVE_PLAYER) {
    ctx.fillStyle = "rgba(255, 0, 0, 1)";
  } else {
    ctx.fillStyle = `rgba(0, 0, 255, ${Math.ceil(Math.random() * 10) / 10})`;
  }

  ctx.fillRect(x, y, width, height);
};

var drawPoints = function (ctx, points, x, y) {
  ctx.fillStyle = "#000";
  ctx.fillText(points, x, y);
};

var drawTitle = function (ctx, x, y, gap) {
  ctx.fillStyle = "#000";
  ctx.font = "16px PT Mono";
  ctx.fillText("Ура, вы победили!", x + gap, y + gap * 3);
  ctx.fillText("Список результатов: ", x + gap, y + gap * 5);
};

window.renderStatistics = function (ctx, players, times) {
  drawCloud(ctx, CLOUD_SHADOW_X, CLOUD_SHADOW_Y, "rgba(0, 0, 0, 0.7");
  drawCloud(ctx, CLOUD_X, CLOUD_Y, "#fff");
  drawTitle(ctx, CLOUD_X, CLOUD_Y, GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    drawName(
      ctx,
      players[i],
      CLOUD_X + GAP * 3 + (GAP_BETWEEN_BAR + BAR_WIDTH) * i,
      CLOUD_HEIGHT - GAP
    );

    drawBar(
      ctx,
      CLOUD_X + GAP * 3 + (GAP_BETWEEN_BAR + BAR_WIDTH) * i,
      CLOUD_HEIGHT - GAP * 3,
      BAR_WIDTH,
      -(BAR_HIGHT * times[i]) / maxTime,
      players[i]
    );

    drawPoints(
      ctx,
      Math.round(times[i]),
      CLOUD_X + GAP * 3 + (GAP_BETWEEN_BAR + BAR_WIDTH) * i,
      -((BAR_HIGHT * times[i]) / maxTime) + CLOUD_HEIGHT - GAP * 4
    );
  }
};
