function Monster(type, strenght, deffence) {
  this.type = type;
  this.strenght = strenght;
  this.deffence = deffence;
  this.hitPoints = 100;
  this.monsterStatus = "hidden";
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
  new Monster("Dragon", 10, 12),
  new Monster("Dragon", 10, 12),
  new Monster("Dragon", 10, 12),
  new Monster("Dragon", 10, 12),
  new Monster("Crawler", 4, 3),
  new Monster("Crawler", 4, 3),
  new Monster("Crawler", 4, 3),
  new Monster("Crawler", 4, 3),
  new Monster("Crawler", 4, 3),
  new Monster("Crawler", 4, 3),
  new Monster("Crawler", 4, 3),
  new Monster("Frog", 2, 1),
  new Monster("Frog", 2, 1),
  new Monster("Frog", 2, 1)
]