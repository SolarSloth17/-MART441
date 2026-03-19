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

      const images = [
        "images/image1.jpg",
        "images/image2.jpg",
        "images/image3.jpg"
      ];
  
    const texts = [
      "Imagination is the gateway of reality",
      "Your senses tell you what is, not what can be",
      "Look inward"
    ];
  
    const shapes = ["circle", "square", "triangle"];
  
    let imageIndex = 0;
    let textIndex = 0;
    let shapeIndex = 0;
  
    // === Animate Image ===
    function switchImage() {
      $("#image").fadeOut(1000, function () {
        $("#image").attr("src", images[imageIndex]);
        moveRandom("#image");
        $("#image").fadeIn(1000);
        imageIndex = (imageIndex + 1) % images.length;
      });
    }
  
    // === Animate Text ===
    function switchText() {
      $("#text").fadeOut(1000, function () {
        $("#text").text(texts[textIndex]);
        moveRandom("#text");
        $("#text").fadeIn(1000);
        textIndex = (textIndex + 1) % texts.length;
      });
    }
  
    // === Animate Shape ===
    function switchShape() {
      const shape = shapes[shapeIndex];
      const shapeDiv = $("#shape");
  
      // Reset shape styles
      shapeDiv.removeClass().css({ display: "none" });
    
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
