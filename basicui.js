$(document).ready(function(){
    //set tile width
    var tileWidth = $("div.tile").css( "width" );
    $("div.tile").css("height", tileWidth);
    $( window ).resize(function() {
        $("div.tile").css("height", tileWidth);
    });
    //prepare the map
    hideMonsters();

    function blink_hero_icon() {
        $('i.hero').fadeOut(500);
        $('i.hero').fadeIn(500);
    };

    function blink_monster_icon() {
        $('.monster').fadeOut(250);
        $('.monster').fadeIn(250);
        $('.monster').fadeOut(250);
        $('.monster').fadeIn(250);
    };

    $('button#start').click(function() {
      $('i.hero').remove();
      $(hero.position + " .tile__centre").prepend( hero.heroAvatar );
      blink_hero_icon();
      blockUnusedDoors();
      openUsedDoors();
      hideMonsters();
      showMonsters();
      setTimeout( blink_monster_icon(), 100);
    });

    $('i.doors--north').click(function() {
      $('i.hero').remove();
      moveHero.moveHeroNorth();
      moveHeroPreparation();
    });

    $('i.doors--south').click(function() {
      $('i.hero').remove();
      moveHero.moveHeroSouth();
      moveHeroPreparation();
    });

    $('i.doors--east').click(function() {
      $('i.hero').remove();
      moveHero.moveHeroEast();
      moveHeroPreparation();
    });

    $('i.doors--west').click(function() {
      $('i.hero').remove();
      moveHero.moveHeroWest();
      moveHeroPreparation();
    });

    function moveHeroPreparation(){
      toggleHeroInsideClass();
      blockUnusedDoors();
      openUsedDoors();
      hideMonsters();
      showMonsters();
      checkForVictory();
      blink_hero_icon();
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
      var selector = 'div' + hero.position + '> div > i.pathDoors';
      $( selector ).removeClass("doorBlocked");
    }

    function showMonsters(){
      var selector = 'div' + hero.position + '> div.tile__centre > i.monster';
      $( selector ).removeClass("hidden");
    }

    function checkForVictory(){
      if ( hero.position == ".x5.y5" ) {

        function postResult(){
          $('#gameResultStatement').fadeOut(250);
          $('#gameResultStatement').fadeIn(250);
        }

        function printResult(){
          document.getElementById("gameResultStatement").innerHTML = 'You are the winner!!!';
          postResult();
          postResult();
          postResult();
          postResult();
        }

        setTimeout(printResult(), 300);
      }
    }
});
