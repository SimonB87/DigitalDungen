const notices = {
  showModal: function(){
    $("#myModal").modal({
      backdrop: "static",
      keyboard: false
    });
  },
  revealMessage: function(messageToDisplay){
    document.getElementById("myModal--notice").innerHTML = messageToDisplay;
    document.getElementById("modalButton").click();
  },
  showBattleDialog: function(){
    const selectorModalSection = "modalSectionThree";
    const spaceInModal = document.getElementById(selectorModalSection);
    const spaceModalContent = `<div class="battleDialog">
          <div class="battleDialog--section battleDialog--hero">
            <h4 class="textAlignCenter">Hero</h4>
            <div id="heroHealthBar" class="figureBar healthBar">
              <div id="heroHealthBarLevel" class="figureBarLevel healthBarLevel"></div>
            </div>
            <div id="heroManaBar" class="figureBar manaBar">
              <div id="heroManaBarLevel" class="figureBarLevel manaBarLevel"></div>
            </div>
          </div>

          <div class="battleDialog--section battleDialog--monster">
            <h4 class="textAlignCenter">${round.currentMonster.type}</h4>
            <div id="monsterHealthBar" class="figureBar healthBar">
              <div id="monsterHealthBarLevel" class="figureBarLevel healthBarLevel"></div>
            </div>
            <div id="monsterManaBar" class="figureBar manaBar">
              <div id="monsterManaBarLevel" class="figureBarLevel manaBarLevel"></div>
            </div>
          </div>

        </div>`;
    spaceInModal.innerHTML = spaceModalContent;

    //TODO show monster and hero stats
  }
}