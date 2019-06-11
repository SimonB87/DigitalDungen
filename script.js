$(document).ready(function(){
    var tileWidth = $("div.tile").css( "width" );
    $("div.tile").css("height", tileWidth);

    $( window ).resize(function() {
        $("div.tile").css("height", tileWidth);
    });

    $("button.start").click(function(){
        setInterval(blink_hero_icon(), 1001);
    });

    function blink_hero_icon() {
        $('i.hero').fadeOut(500);
        $('i.hero').fadeIn(500);
    };
});