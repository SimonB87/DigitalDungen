hero = {
  position: {
    x: 1,
    y: 1
  },
  heroAvatar: "<i class='hero fas'>&#xf43f;</i>",
  buildHeroPosition: function() {
    return ".x" + hero.position.x + ".y" + hero.position.y;
  }
};

moveHero = {
  heroPosition: "",
  getHeroPosition: function() {
    this.heroPosition = ".x" + hero.position.x + ".y" + hero.position.y;
  },
  placeHeroOnMap: function() {
    this.getHeroPosition();
    $(this.heroPosition + " .tile__centre").prepend(hero.heroAvatar);
  },
  moveHeroNorth: function() {
    hero.position.y = hero.position.y - 1;
    this.placeHeroOnMap();
  },
  moveHeroSouth: function() {
    hero.position.y = hero.position.y + 1;
    this.placeHeroOnMap();
  },
  moveHeroEast: function() {
    hero.position.x = hero.position.x + 1;
    this.placeHeroOnMap();
  },
  moveHeroWest: function() {
    hero.position.x = hero.position.x - 1;
    this.placeHeroOnMap();
  }
};
