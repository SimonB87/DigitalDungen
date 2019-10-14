monstersSpawn = {
    locations: [],
    getAllLocations: function() {
        const SELECTOR_ALL_TILES = document.querySelectorAll("#board .tile");
        let numberOfTiles = SELECTOR_ALL_TILES.length;
        for(let i = 0; i < numberOfTiles; i++) {
            let result = {
                x: "",
                y: ""
            }
            let coordinatesXY = SELECTOR_ALL_TILES[i].getAttribute("class");
            coordinatesXY = coordinatesXY.replace("tile ", "");

            result.x = parseInt(coordinatesXY[1], 10);
            result.y = parseInt(coordinatesXY[4], 10);

            this.locations.push(result);
        }
        console.log(this.locations);
      },
    selectRandomTiles: function() {
        //
    }
}

monstersSpawn.getAllLocations();