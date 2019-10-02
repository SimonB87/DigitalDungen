runTest(4);

function runTest(steps){
    
    setTimeout(function(){ 
        document.getElementById("start").click();

        for (var i = 1; i <= steps; i++) {

            var interval = i * 250 + 500;
            var selector = ".tile.x" + i + ".y1 i.doors--south";

            setTimeout(function(){ 
                $(document).ready(function(){
                    $(selector).click(); 
                    console.log("interval " + interval); 
                  });
            }, interval);
        } 
        
    }, 1000);

}
