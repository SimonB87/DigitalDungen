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
    });

    $('i.doors--south').click(function() {
      $('i.hero').remove();
      moveHero.moveHeroSouth();
    });

    /*$('i.pathDoors').click(function() {
      if ( /hero is not in the room/ )  {
        $('i.pathDoors').css('pointer-events', 'none');
      }
    });*/

});
