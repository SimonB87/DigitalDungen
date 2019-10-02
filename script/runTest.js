//runTest(4);

function runTest(steps){
    
    setTimeout(function(){ 
        document.getElementById("start").click();

        for (var i = 1; i <= steps; i++) {

            var interval = i * 250 + 500;
            var selector = ".tile.x1.y"+i+" i.doors--south";

            setTimeout(function(){ 
                $(document).ready(function(){
                    $(selector).click(); 
                    console.log("interval " + interval); 
                  });
                /* document.querySelector(selector).click(); */

            }, interval);
        } 

        for (var i = 1; i <= steps; i++) {

            var interval = i * 250 + 2000;
            var selector = ".tile.x"+i+".y5"+ i +" i.doors--east";

            setTimeout(function(){
                $(document).ready(function(){
                    $(selector).click(); 
                    console.log("interval " + interval); 
                  }); 
                /* document.querySelector(selector).click(); */
            }, interval);
        } 
        
    }, 1000);

}
