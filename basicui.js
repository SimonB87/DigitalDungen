$(document).ready(function(){

  correctionOfBoardSize();

    $(window).resize(function() {
      correctionOfBoardSize();
    });

    //prepare the map
    hideMonsters();

    $('button#start').click(function() {
      hero.position.x = 1;
      hero.position.y = 1;
      var heroPosition = ".x" + hero.position.x + ".y" + hero.position.y;

      $("body").find("i.hero").remove();

      $(heroPosition + " .tile__centre").prepend(hero.heroAvatar);
      blink_hero_icon();
      blockUnusedDoors();
      openUsedDoors();
      hideMonsters();
      showMonsters();
      setTimeout( blink_monster_icon(), 100);
    });

    $('i.doors--north').click(function() {
      $("body").find("i.hero").remove();
      moveHero.moveHeroNorth();
      moveHeroPreparation();
    });

    $('i.doors--south').click(function() {
      $("body").find("i.hero").remove();
      moveHero.moveHeroSouth();
      moveHeroPreparation();
    });

    $('i.doors--east').click(function() {
      $("body").find("i.hero").remove();
      moveHero.moveHeroEast();
      moveHeroPreparation();
    });

    $('i.doors--west').click(function() {
      $("body").find("i.hero").remove();
      moveHero.moveHeroWest();
      moveHeroPreparation();
    });

    function blink_monster_icon() {
        $('.monster').fadeOut(250);
        $('.monster').fadeIn(250);
        $('.monster').fadeOut(250);
        $('.monster').fadeIn(250);
    }

    function moveHeroPreparation(){
      toggleHeroInsideClass();
      blockUnusedDoors();
      openUsedDoors();
      hideMonsters();
      showMonsters();
      checkForVictory();
      blink_hero_icon();
    }

    function blink_hero_icon() {
      $("body").find("i.hero").fadeOut(500);
      $("body").find("i.hero").fadeIn(500);
  }
});

function correctionOfBoardSize(){
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
    $("#board").css("height", maximumBoardSideLength).css("width", maximumBoardSideLength);
  }

  if (windowWidthDiff < 0) {
    var maxWidth = $("#mainContainer").css("width");
    $("#board").css("height", maxWidth).css("width", maxWidth);
  } else {
    var maximumBoardSideLength = windowHeight - headerHeight;
    $("#board").css("height", maximumBoardSideLength).css("width", maximumBoardSideLength);
  }

}

function toggleHeroInsideClass() {
  $('div.tile__centre').removeClass("heroInside");
  $( "div.tile__centre:has(i.hero)" ).addClass( "heroInside" );
}

function blockUnusedDoors(){
  $('i.pathDoors').addClass("doorBlocked");
}

function hideMonsters(){
  $('i.monster').addClass("hidden");
}

function openUsedDoors(){
  var heroPosition = ".x" + hero.position.x + ".y" + hero.position.y,
      selector = 'div' + heroPosition + '> div > i.pathDoors';
  $( selector ).removeClass("doorBlocked");
}

function showMonsters(){
  var heroPosition = ".x" + hero.position.x + ".y" + hero.position.y,
      selector = 'div' + heroPosition + '> div.tile__centre > i.monster';
  $( selector ).removeClass("hidden");
}

function checkForVictory(){
  var heroPosition = ".x" + hero.position.x + ".y" + hero.position.y;
  if ( heroPosition == ".x5.y5" ) {


    function printResult(){
      document.getElementById("myModal--notice").innerHTML = 'You are the winner!!!';
      document.getElementById("modalButton").click();
    }

    $('i.pathDoors').addClass("doorBlocked");

    setTimeout(printResult(), 300);
  }
}