renderHtmlBoard();

function renderHtmlBoard(){

  const gameBoard = "board";
  const countOfTilesInARow = 4;

  renderTiles(countOfTilesInARow, gameBoard);
  addAttributesToTiles(countOfTilesInARow);
  setSpecialAttributes(countOfTilesInARow);
  placeDoorsInTiles(countOfTilesInARow);
  placeMonsters();

  function renderTiles(numberOfTilesInARow, boardElementId){
    const numberOfTilesTotal = numberOfTilesInARow * numberOfTilesInARow;

    //create 9 subsections within each tile
    let subsectionElements = "";
    for ( var j = 1; j < 10; j++ ){
      subsectionElements = `${subsectionElements} <div class='tile--inside' subsection='${j}'></div>`
    }

    const boardTile = `<div class='tile'> ${subsectionElements} </div>`;

    let tileContentString = ""
    for ( var i = 0; i < numberOfTilesTotal; i++ ) {
      tileContentString = `${tileContentString} ${boardTile}`
    }

    //append tiles to the board according to the numberOfTilesInARow^2
    const boardElement = document.getElementById(boardElementId);
    boardElement.innerHTML = tileContentString;

  }

  function addAttributesToTiles(numberOfTilesInARow){
    const allTilesOnBoard = document.querySelectorAll(".board .tile");
    const numberOfTilesTotal = numberOfTilesInARow * numberOfTilesInARow;

    var arrayLocations = [];
    for (var i = 0; i < numberOfTilesInARow; i++ ) {

      for (var j = 0; j < numberOfTilesInARow; j++) {
        const x = i + 1;
        const y = j + 1;
        const tileClasses = `x${x} y${y}`;
        arrayLocations.push(tileClasses);
      }

    }
    
    for (var k = 0; k < allTilesOnBoard.length; k++) {
      const newLocation = arrayLocations[k];
      const xLocation = newLocation.slice(0,2);
      const yLocation = newLocation.slice(3,5);
      allTilesOnBoard[k].classList.add(xLocation);
      allTilesOnBoard[k].classList.add(yLocation);
    }
  }

  function setSpecialAttributes(numberOfTilesInARow){
    const selectorTileFirst = `.board .x${1}.y${1}`;
    const selectorTileLast = `.board .x${numberOfTilesInARow}.y${numberOfTilesInARow}`;
    
    document.querySelector(selectorTileFirst).setAttribute("tileType", "start");
    document.querySelectorAll(selectorTileFirst + " .tile--inside")[1].classList.add("tile__doors--enter");
    document.querySelector(".tile__doors--enter").innerHTML = "<i class='fas'>&#xf150;</i>";

    document.querySelector(selectorTileLast).setAttribute("tileType", "finish");

    const allTilesCenter = document.querySelectorAll(".tile div[subsection='5']");
    for (var i = 0; i < allTilesCenter.length; i++) {
      allTilesCenter[i].classList.add("tile__centre");
    }
  }

  function placeDoorsInTiles(numberOfTilesInARow){
    placeNorthDoors(numberOfTilesInARow);
    placeSouthDoors(numberOfTilesInARow);
    placeEastDoors(numberOfTilesInARow);
    placeWestDoors(numberOfTilesInARow);

    function placeNorthDoors(numberOfTilesInARowArgument) {

      for ( var i = 2; i <= numberOfTilesInARowArgument; i++ ){
        const northSelector = `.board .tile.x${i}`;
        let northDoorTiles = document.querySelectorAll(northSelector);

        for (var j = 0; j < northDoorTiles.length; j++){
          const northDoorSelector = northSelector + " div[subsection='2']";
          document.querySelectorAll(northDoorSelector)[j].classList.add("tile__doors--north");
        }
      }

      const allNorthDoors = document.querySelectorAll(".tile__doors--north");
      for (var k = 0; k < allNorthDoors.length; k++ ){
        allNorthDoors[k].innerHTML = "<i class='fas pathDoors doors--north' doorsToDirection='north'>&#xf52b;</i>"
      }
    }

    function placeSouthDoors(numberOfTilesInARowArgument) {
      for ( var i = 1; i < numberOfTilesInARowArgument; i++ ){
        const southSelector = `.board .tile.x${i}`;
        let southDoorTiles = document.querySelectorAll(southSelector);

        for (var j = 0; j < southDoorTiles.length; j++){
          const southDoorSelector = southSelector + " div[subsection='8']";
          document.querySelectorAll(southDoorSelector)[j].classList.add("tile__doors--south");
        }
      }

      const allNorthDoors = document.querySelectorAll(".tile__doors--south");
      for (var k = 0; k < allNorthDoors.length; k++ ){
        allNorthDoors[k].innerHTML = "<i class='fas pathDoors doors--south' doorsToDirection='south'>&#xf52b;</i>"
      }
    }

    function placeEastDoors(numberOfTilesInARowArgument){
      for(var i = 1; i < numberOfTilesInARowArgument; i++) {
        const eastSelector = `.board .tile.y${i}`;
        let eastTiles = document.querySelectorAll(eastSelector);

        for (var j = 0; j < eastTiles.length; j++){
          const eastDoorSelector = eastSelector + " div[subsection='6']";
          document.querySelectorAll(eastDoorSelector)[j].classList.add("tile__doors--east");
        }
      }

      const allEastDoors = document.querySelectorAll(".tile__doors--east");
      for (var k = 0; k < allEastDoors.length; k++ ){
        allEastDoors[k].innerHTML = "<i class='fas pathDoors doors--east' doorsToDirection='east'>&#xf52b;</i>"
      }
    }

    function placeWestDoors(numberOfTilesInARowArgument){
      for(var i = 2; i <= numberOfTilesInARowArgument; i++) {
        const westSelector = `.board .tile.y${i}`;
        let westTiles = document.querySelectorAll(westSelector);

        for (var j = 0; j < westTiles.length; j++){
          const westDoorSelector = westSelector + " div[subsection='4']";
          document.querySelectorAll(westDoorSelector)[j].classList.add("tile__doors--west");
        }
      }

      const allWestDoors = document.querySelectorAll(".tile__doors--west");
      for (var k = 0; k < allWestDoors.length; k++ ){
        allWestDoors[k].innerHTML = "<i class='fas pathDoors doors--west' doorsToDirection='west'>&#xf52b;</i>"
      }
    }
  }

  function placeMonsters(){
    const allCentres = document.querySelectorAll(".tile--inside.tile__centre");
    //skip first tile
    for (var i = 1; i < allCentres.length; i++){
      allCentres[i].innerHTML = "<i class='monster fas'></i>";
    }
  }
}