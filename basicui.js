$(document).ready(function(){
    var tileWidth = $("div.tile").css( "width" );
    $("div.tile").css("height", tileWidth);

    $( window ).resize(function() {
        $("div.tile").css("height", tileWidth);
    });

    blink_hero_icon();
    function blink_hero_icon() {
        $('i.hero').fadeOut(500);
        $('i.hero').fadeIn(500);
    };

    $('button#start').click(function() {
      $('i.hero').remove();
      $(hero.position + " .tile__centre").prepend( hero.heroAvatar );
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
    }

    function toggleHeroInsideClass() {
      $('div.tile__centre').removeClass("heroInside");
      $( "div.tile__centre:has(i.hero)" ).addClass( "heroInside" );
    }

    function blockUnusedDoors(){
      //$("div.tile--inside:not(:has(div.tile__centre.heroInside))").css("pointer-events", "none");
    }

    function openUsedDoors(){
      //$("tile--inside  div.tile--inside:has(div.tile__centre.heroInside)").css("pointer-events", "auto");
    }
});
