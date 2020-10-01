function Monster(monsterID, type, strength, defense, mana, monsterAvatar) {
  this.monsterID = monsterID;
  this.type = type;
  this.strength = strength;
  this.defense = defense;
  this.hitPoints = 100;
  this.mana = mana;
  this.monsterStatus = "hidden";
  this.monsterAvatar = monsterAvatar;
  this.position = {
    x: "",
    y: ""
  };
  this.attackScream = function() {
    return "Grrr!";
  };
  this.dieScream = function() {
    return "Eeeh.";
  };
}

let monsterArray = [
  new Monster(1, "Dragon", 10, 12, 10, "fa-dragon"),
  new Monster(2, "Dragon", 10, 12, 10, "fa-dragon"),
  new Monster(3, "Dragon", 10, 12, 10, "fa-dragon"),
  new Monster(4, "Dragon", 10, 12, 10, "fa-dragon"),
  new Monster(5, "Crawler", 4, 3, 2, "fa-spider"),
  new Monster(6, "Crawler", 4, 3, 2, "fa-spider"),
  new Monster(7, "Crawler", 4, 3, 2, "fa-spider"),
  new Monster(8, "Crawler", 4, 3, 2, "fa-spider"),
  new Monster(9, "Crawler", 4, 3, 2, "fa-spider"),
  new Monster(10, "Crawler", 4, 3, 2, "fa-spider"),
  new Monster(11, "Crawler", 4, 3, 2, "fa-spider"),
  new Monster(12, "Frog", 2, 1, 0, "fa-frog"),
  new Monster(13, "Frog", 2, 1, 0, "fa-frog"),
  new Monster(14, "Frog", 2, 1, 0, "fa-frog"),
  new Monster(15, "Daemon", 4, 4, 20, "fa-ghost"),
]