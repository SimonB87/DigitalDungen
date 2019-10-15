monstersSpawn = {
  locations: [],
  randomOrder: [],
  shuffledLocations: [],
  getAllLocations: function() {
    const SELECTOR_ALL_TILES = document.querySelectorAll("#board .tile");
    let numberOfTiles = SELECTOR_ALL_TILES.length;
    for (let i = 1; i < numberOfTiles - 1; i++) {
      //Condition to leave specific tiles out for Mouse monsters
      if (i !== 1 && i !== 4 && i !== 5) {
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
    }
  },
  selectRandomOrder: function() {
    const numberOfTilesOnBoard =
      document.querySelectorAll("#board .tile").length - 5;
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
  },
  setRamdonPositions: function() {
    let initialPositions = this.locations;
    let initialSortOrder = this.randomOrder;
    let resultPositionOrder = [];

    for (let k = 0; k < initialPositions.length; k++) {
      resultPositionOrder.push(initialPositions[initialSortOrder[k]]);
    }

    this.shuffledLocations = resultPositionOrder;
  }
};

monstersSpawn.getAllLocations();
monstersSpawn.selectRandomOrder();
monstersSpawn.setRamdonPositions();
