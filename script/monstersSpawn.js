monstersSpawn = {
  locations: [],
  randomOrder: [],
  monstersArray: [
    "dragon1",
    "dragon2",
    "dragon3",
    "dragon4",
    "crawler1",
    "crawler2",
    "crawler3",
    "crawler4",
    "crawler5",
    "crawler6",
    "crawler7"
  ],
  getAllLocations: function() {
    const SELECTOR_ALL_TILES = document.querySelectorAll("#board .tile");
    let numberOfTiles = SELECTOR_ALL_TILES.length;
    for (let i = 1; i < numberOfTiles - 1; i++) {
      let result = {
        x: "",
        y: ""
      };
      let coordinatesXY = document
        .querySelectorAll("#board .tile")
        [i].getAttribute("class");
      coordinatesXY = coordinatesXY.replace("tile ", "");

      result.x = parseInt(coordinatesXY[1], 10);
      result.y = parseInt(coordinatesXY[4], 10);

      this.locations.push(result);
    }
    console.log(this.locations);
  },
  selectRandomOrder: function() {
    const numberOfTilesOnBoard =
      document.querySelectorAll("#board .tile").length - 2;
    let originalOrder = [];

    for (let j = 0; j < numberOfTilesOnBoard; j++) {
      originalOrder.push(j);
    }

    let originalOrderLength = originalOrder.length;

    for (let i = 0; i < originalOrderLength; i++) {
      let randomNumber = Math.floor(Math.random() * originalOrder.length);
      this.randomOrder.push(originalOrder[randomNumber]);
      originalOrder.splice(randomNumber, 1);
    }
    console.log(this.randomOrder);
  }
};

monstersSpawn.getAllLocations();
monstersSpawn.selectRandomOrder();
