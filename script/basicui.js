$(document).ready(function() {
  correctionOfBoardSize();

  $(window).resize(function() {
    correctionOfBoardSize();
  });

  //prepare the map
  hideMonsters();

  $("button#start").click(function() {
    hero.position.x = hero.position.y = 1;
    var heroPosition = hero.buildHeroPosition();

    $("i.hero").remove();

    $(heroPosition + " .tile__centre").prepend(hero.heroAvatar);

    setRandomPositions();
    console.log(monstersSpawn.monstersArray);

    blinkHeroIcon();
    prepareRooms();

    function setRandomPositions() {
      monstersObject.dragon1.position = monstersSpawn.location[13];
      monstersObject.dragon2.position =
        monstersSpawn.location[monstersSpawn.randomOrder[1]];
      monstersObject.dragon3.position =
        monstersSpawn.location[monstersSpawn.randomOrder[2]];
      monstersObject.dragon4.position =
        monstersSpawn.location[monstersSpawn.randomOrder[3]];
      monstersObject.crawler1.position =
        monstersSpawn.location[monstersSpawn.randomOrder[4]];
      monstersObject.crawler2.position =
        monstersSpawn.location[monstersSpawn.randomOrder[5]];
      monstersObject.crawler3.position =
        monstersSpawn.location[monstersSpawn.randomOrder[6]];
      monstersObject.crawler4.position =
        monstersSpawn.location[monstersSpawn.randomOrder[7]];
      monstersObject.crawler5.position =
        monstersSpawn.location[monstersSpawn.randomOrder[8]];
      monstersObject.crawler6.position =
        monstersSpawn.location[monstersSpawn.randomOrder[9]];
      monstersObject.crawler7.position =
        monstersSpawn.location[monstersSpawn.randomOrder[10]];
    }
  });

  //After clicking doors move hero

  $("i.pathDoors").click(function() {
    var destination = $(this).attr("doorsToDirection");

    $("i.hero").remove();

    if (destination === "north") {
      moveHero.moveHero(0, -1);
    } else if (destination === "south") {
      moveHero.moveHero(0, +1);
    } else if (destination === "east") {
      moveHero.moveHero(+1, 0);
    } else if (destination === "west") {
      moveHero.moveHero(-1, 0);
    }

    moveHeroEvaluation();
  });

  function moveHeroEvaluation() {
    toggleHeroInsideClass();
    prepareRooms();
    checkForVictory();
    blinkHeroIcon(500);

    function toggleHeroInsideClass() {
      $("div.tile__centre").removeClass("heroInside");
      $("div.tile__centre:has(i.hero)").addClass("heroInside");
    }
  }

  function blinkHeroIcon(time) {
    $("i.hero")
      .fadeOut(time)
      .fadeIn(time);
  }
});

function correctionOfBoardSize() {
  var windowHeight = window.innerHeight,
    windowWidth = window.innerWidth,
    headerHeight = document.querySelector("header").offsetHeight,
    boardHeight = document.querySelector("#board").offsetHeight,
    boardWidth = document.querySelector("#board").offsetWidth,
    windowHeightDiff = windowHeight - headerHeight - boardHeight,
    windowWidthDiff = windowWidth - boardWidth;

  if (windowHeightDiff > 0) {
    var boardWidth = $("#board").css("width");
    $("#board").css("height", boardWidth);
  } else {
    var maximumBoardSideLength = windowHeight - headerHeight;
    $("#board")
      .css("height", maximumBoardSideLength)
      .css("width", maximumBoardSideLength);
  }

  if (windowWidthDiff < 0) {
    var maxWidth = $("#mainContainer").css("width");
    $("#board")
      .css("height", maxWidth)
      .css("width", maxWidth);
  } else {
    var maximumBoardSideLength = windowHeight - headerHeight;
    $("#board")
      .css("height", maximumBoardSideLength)
      .css("width", maximumBoardSideLength);
  }
}

function checkForVictory() {
  var heroPosition = hero.buildHeroPosition();
  const finishTile = document
    .querySelector("#board .tile[tiletype=finish]")
    .getAttribute("class"); //"tile x4 y4"
  const finishTileX = finishTile[6];
  const finishTileY = finishTile[9];
  const finishTileCooordinates = ".x" + finishTileX + ".y" + finishTileY;

  //.x5.y5
  if (heroPosition == finishTileCooordinates) {
    setTimeout(printResult(), 300);
    blockUnusedDoors();

    document.getElementById("myModal--notice").innerHTML =
      "You are the winner!!!";
    document.getElementById("modalButton").click();
  }

  function printResult() {
    $("#myModal").modal({
      backdrop: "static",
      keyboard: false
    });
  }
}

function prepareRooms() {
  var heroPosition = hero.buildHeroPosition();
  blockUnusedDoors();
  openUsedDoors(heroPosition);
  hideMonsters();
  showMonsters(heroPosition);

  function openUsedDoors(heroPositionValue) {
    var selector = "div" + heroPositionValue + "> div > i.pathDoors";
    $(selector).removeClass("doorBlocked");
  }

  function showMonsters(heroPositionValue) {
    var selector = "div" + heroPositionValue + "> div.tile__centre > i.monster";
    $(selector).removeClass("hidden");
  }
}

function hideMonsters() {
  $("i.monster").addClass("hidden");
}

function blockUnusedDoors() {
  $("i.pathDoors").addClass("doorBlocked");
}
