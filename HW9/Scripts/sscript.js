var ricedishSelector = "#ricedish";
var allRiceDish = new Array();
class ricedishInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath; 
    }
}

function initializeArray()
{

    var ricedish = new ricedishInfo("#ricedish", "images/dog.jpg");
    ricedish.push(ricedish);

}
$(document).ready(function(){
    initializeArray();
    console.log(allRiceDish.length);
    console.log(allRiceDish[0].toString());
    console.log(allRiceDish[0].theSelector);
    console.log(allRiceDish[0].theImagePath);
    
    //$(allDogs[0].theSelector).src = allDogs[0].theImagePath;
    //$("#my_image").attr("src","second.jpg");
    $(allRiceDish[0].theSelector).attr("src", allRiceDish[0].theImagePath);

    $("button").click(function(){
       
        $(".stuff").fadeOut();

        $("#third").toggle();
           setInterval(moveSquare, 1000);
        
        $(allDogs[0].theSelector).fadeOut().fadeIn();
        
    });
    
});

function moveSquare()
{
    $("#square").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
}
