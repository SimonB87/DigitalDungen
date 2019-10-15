function Monster(type, strenght, deffence, monsterAvatar) {
  this.type = type;
  this.strenght = strenght;
  this.deffence = deffence;
  this.hitPoints = 100;
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
  new Monster("Dragon", 10, 12, "&#xf6d5;"),
  new Monster("Dragon", 10, 12, "&#xf6d5;"),
  new Monster("Dragon", 10, 12, "&#xf6d5;"),
  new Monster("Dragon", 10, 12, "&#xf6d5;"),
  new Monster("Crawler", 4, 3, "&#xf188;"),
  new Monster("Crawler", 4, 3, "&#xf188;"),
  new Monster("Crawler", 4, 3, "&#xf188;"),
  new Monster("Crawler", 4, 3, "&#xf188;"),
  new Monster("Crawler", 4, 3, "&#xf188;"),
  new Monster("Crawler", 4, 3, "&#xf188;"),
  new Monster("Crawler", 4, 3, "&#xf188;"),
  new Monster("Frog", 2, 1, "&#xf52e;"),
  new Monster("Frog", 2, 1, "&#xf52e;"),
  new Monster("Frog", 2, 1, "&#xf52e;")
]