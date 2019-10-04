//Test for walk through the labyrint.
function runTest() {
  for (var i = 1; i < 5; i++) {
    makeOneStep(i);
  }
}

function makeOneStep(step) {
  //prepare way South
  var intervalToSouth = step * 250 + 250;
  var selectorToSouth = ".tile.x1.y" + step + " i.doors--south";

  setTimeout(function() {
    document.querySelector(selectorToSouth).click();
  }, intervalToSouth);

  //prepare way East
  var intervalToEast = intervalToSouth + 750;
  var selectorToEast = ".tile.x" + step + ".y5 i.doors--east";

  setTimeout(function() {
    document.querySelector(selectorToEast).click();
  }, intervalToEast);
}
