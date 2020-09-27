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
  }
}