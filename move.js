hero = {
  position: ".x1.y1",
  heroAvatar: "<i class='hero fas'>&#xf43f;</i>"
}

moveHero = {
  moveHeroNorth : function() {
    var storeVar = hero.position.substr(5,1);
    var results;

    if( storeVar == 2) {
      results = "1";
    } else if ( storeVar == 3) {
      results = "2";
    } else if ( storeVar == 4) {
      results = "3";
    } else if ( storeVar == 5) {
      results = "4";
    }

    hero.position = hero.position.slice(0, 5);
    hero.position = hero.position + results;

    $(hero.position + " .tile__centre").prepend( hero.heroAvatar );
  },

  moveHeroSouth : function() {
    var storeVar = hero.position.substr(5,1);
    var results;

    if( storeVar == 1) {
      results = "2";
    } else if ( storeVar == 2) {
      results = "3";
    } else if ( storeVar == 3) {
      results = "4";
    } else if ( storeVar == 4) {
      results = "5";
    }

    hero.position = hero.position.slice(0, 5);
    hero.position = hero.position + results;

    $(hero.position + " .tile__centre").prepend( hero.heroAvatar );
  }

}
