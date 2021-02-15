hero = {
  position: {
    x: 1,
    y: 1
  },
  previousPosition: {
    x: 1,
    y: 1
  },
  specs: {
    strength: 6,
    defense: 4,
    hitPoints: 100,
    mana: 5,
    countOfSpelsToChant: 1,
    level: 1,
    skillPoints: 0
  },
  inventory: [
    {
    name: "bread",
    type: "consumable", 
    kind: "food", 
    usage: "heal", 
    defence: 0, 
    damage: 0, 
    itemHitPoints: 1, 
    itemWeight: 0.5,
    hitPointsIncrease: 5, 
    mana: 0, 
    skillPoints: 0,
    handsToUse: 0
    }
  ],
  weapon: {
    name: "short sword",
    type: "item",
    kind: "wearable",
    usage: "weapon",
    defence: 2, 
    damage: 4,
    itemHitPoints: 100,
    itemWeight: 2,
    hitPointsIncrease: 0, 
    mana: 0, 
    skillPoints: 0,
    handsToUse: 1
  },
  armor: {
    headGear: {
      name: "leather hat",
      type: "item",
      kind: "wearable",
      usage: "armor",
      defense: 0.5,
      damage: 0,
      itemHitPoints: 100,
      itemWeight: 0.5,
      hitPointsIncrease: 0, 
      mana: 0, 
      skillPoints: 0,
      handsToUse: 0
    },
    shield: {
      name: "wooden shield",
      type: "item",
      kind: "wearable",
      usage: "armor",
      defense: 1,
      damage: 0,
      itemHitPoints: 100,
      itemWeight: 2,
      hitPointsIncrease: 0, 
      mana: 0, 
      skillPoints: 0,
      handsToUse: 0
    },
    chestPlate: {
      name: "tunica",
      type: "item",
      kind: "wearable",
      usage: "armor",
      defense: 1,
      damage: 0,
      itemHitPoints: 100,
      itemWeight: 1,
      hitPointsIncrease: 0, 
      mana: 0, 
      skillPoints: 0,
      handsToUse: 0
    },
    shoes: {
      name: "leather shoes",
      type: "item",
      kind: "wearable",
      usage: "armor",
      defense: 1,
      damage: 0,
      itemHitPoints: 100,
      itemWeight: 0.5,
      hitPointsIncrease: 0, 
      mana: 0, 
      skillPoints: 0,
      handsToUse: 0
    }
  },
  spells: {
    chanted: {
      name: "",
      spellKind: "",
      effect: {
        increaseHealth: 0,
        increaseStrength: 0,
        increaseHitPoints: 0,
        increaseDefence: 0,
        manaConsuption: 0
      }
    },
    known: [
      {
        name: "battle cry",
        spellKind: "chant",
        effect: {
          increaseHealth: 0,
          increaseStrength: 1,
          increaseHitPoints: 0,
          increaseDefence: 1,
          manaConsuption: 1
        }
      }
    ]
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
