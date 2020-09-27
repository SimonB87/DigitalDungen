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
    const newMessage = `<strong>Notice: </strong> ${hero.message} <br> <strong>State: </strong> ${hero.situation} <br> <h3>Choose action:</h3> `;
    notices.revealMessage(newMessage);
    setTimeout(notices.showModal(), 1000);
    prepareFightModal();

    function prepareFightModal(){
      const modalDialog = document.querySelector(".modal-dialog");
      const modalDialogSectionTwo = document.querySelector("#modalSectionTwo");
      const actionButtons = 
        "<button type='button' class='btn btn-outline-primary btn-actions' onclick='round.heroAttacks();'>" +
        "Attack</button>" + 
        "<button type='button' class='btn btn-outline-info btn-actions' onclick='round.heroDefends();'>" + 
        "Deffend</button>" + 
        "<button type='button' class='btn btn-outline-dark btn-actions' onclick='round.heroWithDraws();'>"+
        "Escape</button>";
      modalDialog.classList.add("modal-fighting");
      modalDialogSectionTwo.innerHTML = actionButtons;
    }
  },
  heroAttacks: function(){
    console.log("Hero attacks!");
    document.querySelector(".modal-dialog .close").click();
  },
  heroDefends: function(){
    console.log("Hero deffends!");
    document.querySelector(".modal-dialog .close").click();
  },
  heroWithDraws: function(){
    console.log("Hero runs away!");
    document.querySelector(".modal-dialog .close").click();
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