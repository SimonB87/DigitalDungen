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

    blinkHeroIcon();
    prepareRooms();

    function setRandomPositions() {
      for (let num = 0; num < 11; num++ ) {
        monsterArray[num].position = monstersSpawn.shuffledLocations[num];
      }
      monsterArray[11].position = { x: 2, y: 1 };
      monsterArray[12].position = { x: 1, y: 2 };
      monsterArray[13].position = { x: 2, y: 2 };
      monsterArray[14].position = { x: 4, y: 4 };
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
    round.checkForFight();
    round.checkForVictory();
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
    for ( let monster = 0; monster < monsterArray.length; monster++ ) {
      if (( monsterArray[monster].position.x === hero.position.x ) && (monsterArray[monster].position.y === hero.position.y )) {
        var selector = "div" + heroPositionValue + "> div.tile__centre > i.monster.fas";
        document.querySelector(selector).classList.add(monsterArray[monster].monsterAvatar);
      }
    }
  }
}

function hideMonsters() {
  const LIST_OF_MONSTER_AVATARS = ["fa-dragon", "fa-spider", "fa-frog", "fa-ghost"];
  for(let numAvatars = 0; numAvatars < LIST_OF_MONSTER_AVATARS.length; numAvatars++ ){
    let selector = "i.monster.fas";
    let selectorWithAvatar = selector + "." + LIST_OF_MONSTER_AVATARS[numAvatars];
    if( document.querySelectorAll(selectorWithAvatar).length > 0 ) {
      document.querySelector(selectorWithAvatar).classList.remove(LIST_OF_MONSTER_AVATARS[numAvatars]);
    }
  }
}

function blockUnusedDoors() {
  $("i.pathDoors").addClass("doorBlocked");
}
