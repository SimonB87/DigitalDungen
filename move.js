hero = {
  position: {
    x: 1,
    y: 1
  },
  heroAvatar: "<i class='hero fas'>&#xf43f;</i>"
}

moveHero = {
  heroPosition : "",
  getHeroPosition : function() {
    this.heroPosition = ".x" + hero.position.x + ".y" + hero.position.y;
  },
  moveHeroNorth : function() {
    hero.position.y = hero.position.y - 1;
    //var heroPosition = ".x" + hero.position.x + ".y" + hero.position.y;

    /* var storeVar = hero.position.substr(5,1);
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
    hero.position = hero.position + results; */
    this.getHeroPosition();
    $(this.heroPosition + " .tile__centre").prepend( hero.heroAvatar );
  },

  moveHeroSouth : function() {
    hero.position.y = hero.position.y + 1;
    //var heroPosition = ".x" + hero.position.x + ".y" + hero.position.y;

/*     var storeVar = hero.position.substr(5,1);
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
    hero.position = hero.position + results; */
    this.getHeroPosition();
    $(this.heroPosition + " .tile__centre").prepend( hero.heroAvatar );
  },

  moveHeroEast : function() {
    hero.position.x = hero.position.x + 1;
    //var heroPosition = ".x" + hero.position.x + ".y" + hero.position.y;
/*     var storeVarStart = hero.position.slice(0, 2);
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

    hero.position = storeVarStart + results + storeVarEnd; */
    this.getHeroPosition();
    $(this.heroPosition + " .tile__centre").prepend( hero.heroAvatar );
  },

  moveHeroWest : function() {
    hero.position.x = hero.position.x - 1;
    //var heroPosition = ".x" + hero.position.x + ".y" + hero.position.y;
    /* var storeVarStart = hero.position.slice(0, 2);
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

    hero.position = storeVarStart + results + storeVarEnd; */
    this.getHeroPosition();
    $(this.heroPosition + " .tile__centre").prepend( hero.heroAvatar );
  }

}
