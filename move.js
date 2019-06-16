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
  },

  moveHeroEast : function() {
    var storeVarStart = hero.position.slice(0, 2);
    var placeholder = hero.position.slice(2, 3);
    var storeVarEnd = hero.position.slice(3, 6);//position: ".x1.y1",
    var results;

    if( placeholder == 1) {
      results = 2;
    } else if ( placeholder == 2) {
      results = 3;
    } else if ( placeholder == 3) {
      results = 4;
    } else if ( placeholder == 4) {
      results = 5;
    }

    hero.position = storeVarStart + results + storeVarEnd;

    $(hero.position + " .tile__centre").prepend( hero.heroAvatar );
  },

  moveHeroWest : function() {
    var storeVarStart = hero.position.slice(0, 2);
    var placeholder = hero.position.slice(2, 3);
    var storeVarEnd = hero.position.slice(3, 6);//position: ".x1.y1",
    var results;

    if( placeholder == 2) {
      results = 1;
    } else if ( placeholder == 3) {
      results = 2;
    } else if ( placeholder == 4) {
      results = 3;
    } else if ( placeholder == 5) {
      results = 4;
    }

    hero.position = storeVarStart + results + storeVarEnd;

    $(hero.position + " .tile__centre").prepend( hero.heroAvatar );
  }

}
