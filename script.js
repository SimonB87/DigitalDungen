$(document).ready(function(){

});

var tileWidth = $("div.tile").css( "width" );
$("div.tile").css("height", tileWidth);

$( window ).resize(function() {
    $("div.tile").css("height", tileWidth);
});
