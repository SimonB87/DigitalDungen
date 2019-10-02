$(document).ready(function() {
  setTimeout(function() {
    //goTesting();
    console.log("start test");
  }, 2000);

  //test for going through the whole board
  function goTesting() {
    setTimeout(function() {
      $("#start").click();
      console.log("start click");
    }, 500);

    setTimeout(function() {
      $(
        ".tile.x1.y1 > .tile--inside.tile__doors.tile__doors--south > i"
      ).click();
    }, 500);
    setTimeout(function() {
      $(
        ".tile.x1.y2 > .tile--inside.tile__doors.tile__doors--south > i"
      ).click();
    }, 750);
    setTimeout(function() {
      $(
        ".tile.x1.y3 > .tile--inside.tile__doors.tile__doors--south > i"
      ).click();
    }, 1000);
    setTimeout(function() {
      $(
        ".tile.x1.y4 > .tile--inside.tile__doors.tile__doors--south > i"
      ).click();
    }, 1250);

    setTimeout(function() {
      $(
        ".tile.x2.y5 > .tile--inside.tile__doors.tile__doors--east > i"
      ).click();
    }, 1500);

    setTimeout(function() {
      $(
        ".tile.x3.y5 > .tile--inside.tile__doors.tile__doors--east > i"
      ).click();
    }, 1750);

    setTimeout(function() {
      $(
        ".tile.x3.y5 > .tile--inside.tile__doors.tile__doors--east > i"
      ).click();
    }, 2000);

    setTimeout(function() {
      $(
        ".tile.x4.y5 > .tile--inside.tile__doors.tile__doors--east > i"
      ).click();
      console.log("final destination");
    }, 2250);
  }
});
