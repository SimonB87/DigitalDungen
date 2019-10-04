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

    $("body")
      .find("i.hero")
      .remove();

    $(heroPosition + " .tile__centre").prepend(hero.heroAvatar);
    blinkHeroIcon();
    prepareRooms();
  });

  //After clicking doors move hero

  $("i.pathDoors").click(function() {
    var destination = $(this).attr("doorsToDirection");

    $("body")
      .find("i.hero")
      .remove();

    if (destination === "north") {
      moveHero.moveHeroNorth();
    } else if (destination === "south") {
      moveHero.moveHeroSouth();
    } else if (destination === "east") {
      moveHero.moveHeroEast();
    } else if (destination === "west") {
      moveHero.moveHeroWest();
    }

    moveHeroPreparation();
  });

  function moveHeroPreparation() {
    toggleHeroInsideClass();
    prepareRooms();
    checkForVictory();
    blinkHeroIcon();

    function toggleHeroInsideClass() {
      $("div.tile__centre").removeClass("heroInside");
      $("div.tile__centre:has(i.hero)").addClass("heroInside");
    }
  }

  function blinkHeroIcon() {
    $("body")
      .find("i.hero")
      .fadeOut(500)
      .fadeIn(500);
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

  if (heroPosition == ".x5.y5") {
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
