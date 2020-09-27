let round = {
  checkForFight: function(){
    const monsterInRoomWithHero = round.checkForPresentMonster();
    if (!( monsterInRoomWithHero == null )) {
      hero.message = "you encountered a " +
      monsterArray[monsterInRoomWithHero].type + " in room " + 
      "X" + monsterArray[monsterInRoomWithHero].position.x + " Y" + monsterArray[monsterInRoomWithHero].position.y;
      hero.situation = "fighting";
    } else {
      hero.message ="Room is empty!";
      hero.situation = "search room";
    }
    this.prepareFight();
  },
  prepareFight: function(){
    const newMessage = `<strong>Notice: </strong> ${hero.message} <br> <strong>State: </strong> ${hero.situation}`;
    notices.revealMessage(newMessage);
    setTimeout(notices.showModal(), 1000);
  },
  checkForVictory: function() {
    const heroPosition = hero.buildHeroPosition();
    const finishTile = document
      .querySelector("#board .tile[tiletype=finish]")
      .getAttribute("class"); //"tile x4 y4"
    const finishTileX = finishTile[6];
    const finishTileY = finishTile[9];
    const finishTileCoordinates = ".x" + finishTileX + ".y" + finishTileY;
  
    //.x4.y4 and Deamon is dead
    if ((heroPosition == finishTileCoordinates) && ( monsterArray[14].hitPoints == 0)) {
      const newMessage = "You are the winner!!!";
      notices.revealMessage(newMessage);
      setTimeout(notices.showModal(), 300);
      blockUnusedDoors();
    }
  
  },
  checkForPresentMonster: function(){
    const monsterCount = monsterArray.length;
    let selectedMonster = null;
 
    for ( var i = 0; i < monsterCount; i++){
      if ((monsterArray[i].position.x == hero.position.x) && (monsterArray[i].position.y == hero.position.y)) {
        selectedMonster = i;
        } 
    }
    return selectedMonster;
  }
}