//Test for walk through the labyrint.
function runTest() {
  makeOneStep(1);
  makeOneStep(2);
  makeOneStep(3);
  makeOneStep(4);
}

function makeOneStep(step) {
  //prepare way South
  var intervalToSouth = step * 250 + 500;
  var selectorToSouth = ".tile.x1.y" + step + " i.doors--south";

  setTimeout(function() {
    document.querySelector(selectorToSouth).click();
  }, intervalToSouth);

  //prepare way East
  var intervalToEast = intervalToSouth + 1000;
  var selectorToEast = ".tile.x" + step + ".y5 i.doors--east";

  setTimeout(function() {
    document.querySelector(selectorToEast).click();
  }, intervalToEast);
}
