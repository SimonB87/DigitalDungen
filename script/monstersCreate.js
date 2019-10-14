function Monster(type, strenght, deffence) {
  this.type = type;
  this.strenght = strenght;
  this.deffence = deffence;
  this.hitPoints = 100;
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

let monstersObject = {
  dragon1: new Monster("Dragon", 10, 12),
  dragon2: new Monster("Dragon", 10, 12),
  dragon3: new Monster("Dragon", 10, 12),
  dragon4: new Monster("Dragon", 10, 12),
  crawler1: new Monster("Crawler", 4, 3),
  crawler2: new Monster("Crawler", 4, 3),
  crawler3: new Monster("Crawler", 4, 3),
  crawler4: new Monster("Crawler", 4, 3),
  crawler5: new Monster("Crawler", 4, 3),
  crawler6: new Monster("Crawler", 4, 3),
  crawler7: new Monster("Crawler", 4, 3),
  frog1: new Monster("Frog", 2, 1),
  frog2: new Monster("Frog", 2, 1),
  frog3: new Monster("Frog", 2, 1)
};
