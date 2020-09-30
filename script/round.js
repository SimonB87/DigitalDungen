let round = {
  currentMonster : {
    monsterNumber: 0,
    type: "",
    position: {
      x: 0,
      y: 0
    }
  },
  checkForFight: function(){
    const monsterInRoomWithHero = round.checkForPresentMonster();
    if (!( monsterInRoomWithHero == null )) {
      hero.message = "you encountered a " +
      monsterArray[monsterInRoomWithHero].type + " in room " + 
      "X" + monsterArray[monsterInRoomWithHero].position.x + " Y" + monsterArray[monsterInRoomWithHero].position.y;

      this.currentMonster.monsterNumber = monsterInRoomWithHero;
      this.currentMonster.type = monsterArray[monsterInRoomWithHero].type;
      this.currentMonster.position.x = monsterArray[monsterInRoomWithHero].position.x;
      this.currentMonster.position.y = monsterArray[monsterInRoomWithHero].position.y;

      hero.situation = "fighting";
    } else {
      hero.message ="Room is empty!";
      hero.situation = "search room";
    }
    this.prepareFight();
    if ( hero.situation == "search room" ) {
      const roundButtonAttack = document.getElementById("roundButtonAttack");
      const roundButtonDefend = document.getElementById("roundButtonDefend");
      roundButtonAttack.disabled = true;
      roundButtonDefend.disabled = true;
    }
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
        "<button id='roundButtonAttack' type='button' class='btn btn-outline-primary btn-actions' onclick='round.heroAttacks();'>" +
        "Attack</button>" + 
        "<button id='roundButtonDefend' type='button' class='btn btn-outline-info btn-actions' onclick='round.heroDefends();'>" + 
        "Deffend</button>" + 
        "<button id='roundButtonWithdraw' type='button' class='btn btn-outline-dark btn-actions' onclick='round.heroWithDraws();'>" +
        "Escape</button>" + 
        "<button id='roundButtonReequip' type='button' class='btn btn-outline-warning' onclick='round.heroChangeGear();'>Reequip</button>";
      modalDialog.classList.add("modal-fighting");
      modalDialogSectionTwo.innerHTML = actionButtons;
    }
  },
  heroAttacks: function(){
    //document.querySelector(".modal-dialog .close").click();
    hero.situation = "attacking";

    hero.message = `You are attacking the ${this.currentMonster.type} in room X${this.currentMonster.position.x} Y${this.currentMonster.position.y}.`;
    const newMessage = `<strong>Notice: </strong> ${hero.message} <br> <strong>State: </strong> ${hero.situation} <br> <h3>Choose action:</h3> `;
    document.getElementById("myModal--notice").innerHTML = newMessage;

    notices.showBattleDialog();
    this.settleBattleRound();//TODO
    this.showBattleRoundResult();//TODO
  },
  heroDefends: function(){
    //document.querySelector(".modal-dialog .close").click();
    hero.situation = "defending";

    hero.message = `You are defending against the ${this.currentMonster.type} in room X${this.currentMonster.position.x} Y${this.currentMonster.position.y}.`;
    const newMessage = `<strong>Notice: </strong> ${hero.message} <br> <strong>State: </strong> ${hero.situation} <br> <h3>Choose action:</h3> `;
    document.getElementById("myModal--notice").innerHTML = newMessage;

    notices.showBattleDialog();
    this.settleBattleRound();
    this.showBattleRoundResult();
  },
  heroWithDraws: function(){
    document.querySelector(".modal-dialog .close").click();
    moveHero.heroRunsAway();
    this.prepareRoomBeforeRound();
    setTimeout(function(){ 
      round.checkForFight(); 
    }, 
    1000);
  },
  heroChangeGear: function(){
    //TODO
    console.log("Hero changes gear ...");
  },
  settleBattleRound: function(){
    //TODO
    console.log("Calculate battle results ...");
  },
  showBattleRoundResult: function(){
    //TODO
    console.log("Show battle results ...");
  },
  prepareRoomBeforeRound: function(){
    toggleHeroInsideClass();
    prepareRooms();
    blinkHeroIcon(500);

    function toggleHeroInsideClass() {
      $("div.tile__centre").removeClass("heroInside");
      $("div.tile__centre:has(i.hero)").addClass("heroInside");
    }

    function blinkHeroIcon(time) {
      $("i.hero")
        .fadeOut(time)
        .fadeIn(time);
    }

    function prepareRooms() {
      var heroPosition = hero.buildHeroPosition();
      blockUnusedDoors();
      openUsedDoors(heroPosition);
      hideMonsters();
      showMonsters(heroPosition);
    
      function openUsedDoors(heroPositionValue) {
        var selector = "div" + heroPositionValue + "> div > i.pathDoors";
        $(selector).removeClass("doorBlocked");
      }

      function hideMonsters() {
        const listOfMonsterAvatar = ["fa-dragon", "fa-spider", "fa-frog", "fa-ghost"];
        const countOfMonsterAvatars = listOfMonsterAvatar.length
        for(let numAvatars = 0; numAvatars < countOfMonsterAvatars; numAvatars++ ){
          let selector = "i.monster.fas";
          let selectorWithAvatar = selector + "." + listOfMonsterAvatar[numAvatars];
          if( document.querySelectorAll(selectorWithAvatar).length > 0 ) {
            document.querySelector(selectorWithAvatar).classList.remove(listOfMonsterAvatar[numAvatars]);
          }
        }
      }
    
      function showMonsters(heroPositionValue) {
        for ( let monster = 0; monster < monsterArray.length; monster++ ) {
          if (( monsterArray[monster].position.x === hero.position.x ) && (monsterArray[monster].position.y === hero.position.y )) {
            var selector = "div" + heroPositionValue + "> div.tile__centre > i.monster.fas";
            document.querySelector(selector).classList.add(monsterArray[monster].monsterAvatar);
          }
        }
      }

      function blockUnusedDoors() {
        $("i.pathDoors").addClass("doorBlocked");
      }
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