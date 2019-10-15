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
  new Monster("Dragon", 10, 12, "fa-dragon"),
  new Monster("Dragon", 10, 12, "fa-dragon"),
  new Monster("Dragon", 10, 12, "fa-dragon"),
  new Monster("Dragon", 10, 12, "fa-dragon"),
  new Monster("Crawler", 4, 3, "fa-spider"),
  new Monster("Crawler", 4, 3, "fa-spider"),
  new Monster("Crawler", 4, 3, "fa-spider"),
  new Monster("Crawler", 4, 3, "fa-spider"),
  new Monster("Crawler", 4, 3, "fa-spider"),
  new Monster("Crawler", 4, 3, "fa-spider"),
  new Monster("Crawler", 4, 3, "fa-spider"),
  new Monster("Frog", 2, 1, "fa-frog"),
  new Monster("Frog", 2, 1, "fa-frog"),
  new Monster("Frog", 2, 1, "fa-frog"),
  new Monster("Deamon", 4, 4, "fa-ghost"),
]