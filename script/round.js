let round = {
  checkForFight: function(){
    const monsterInRoomWithHero = round.checkForPresentMonster();
    //test
    console.log(monsterInRoomWithHero);
    //test
    if (!( monsterInRoomWithHero == null )) {
      console.log("you encountered a " +
      monsterArray[monsterInRoomWithHero].type + " in room " + 
      "X" + monsterArray[monsterInRoomWithHero].position.x + " Y" + monsterArray[monsterInRoomWithHero].position.y);
    } else {
      console.log(`Room is empty!`);
    }
  },
  checkForVictory: function() {
    const heroPosition = hero.buildHeroPosition();
    const finishTile = document
      .querySelector("#board .tile[tiletype=finish]")
      .getAttribute("class"); //"tile x4 y4"
    const finishTileX = finishTile[6];
    const finishTileY = finishTile[9];
    const finishTileCoordinates = ".x" + finishTileX + ".y" + finishTileY;
  
    //.x5.y5
    if (heroPosition == finishTileCoordinates) {
      setTimeout(printResult(), 300);
      blockUnusedDoors();
  
      document.getElementById("myModal--notice").innerHTML =
        "You are the winner!!!";
      document.getElementById("modalButton").click();
    }
  
    function printResult() {
      $("#myModal").modal({
        backdrop: "static",
        keyboard: false
      });
    }
  },
  checkForPresentMonster: function(){
    const monsterCount = monsterArray.length;
    let selectedMonster = null;
 
    for ( var i = 0; i < monsterCount; i++){
      if ((monsterArray[i].position.x == hero.position.x) && (monsterArray[i].position.y == hero.position.y)) {
        selectedMonster = monsterArray[i].monsterID;
      } 
    }
    return selectedMonster;
  }
}