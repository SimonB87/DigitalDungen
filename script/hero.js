hero = {
  position: {
    x: 1,
    y: 1
  },
  previousPosition: {
    x: 1,
    y: 1
  },
  situation: "",
  message: "",
  heroAvatar: "<i class='hero fas'>&#xf521;</i>",
  buildHeroPosition: function() {
    return ".x" + hero.position.x + ".y" + hero.position.y;
  },
  saveHeroPosition: function() {
    this.previousPosition.x = this.position.x;
    this.previousPosition.y = this.position.y;
  }
};

moveHero = {
  placeHeroOnMap: function() {
    var heroPosition = hero.buildHeroPosition();
    $(heroPosition + " .tile__centre").prepend(hero.heroAvatar);
  },
  moveHero: function(xAxis, yAxis) {
    xAxis !== 0 ? (hero.position.x = hero.position.x + xAxis) : null;
    yAxis !== 0 ? (hero.position.y = hero.position.y + yAxis) : null;
    this.placeHeroOnMap();
  },
  heroRunsAway: function(){
    $("i.hero").remove();
    hero.position.x = hero.previousPosition.x;
    hero.position.y = hero.previousPosition.y;
    this.placeHeroOnMap();
  }
};
