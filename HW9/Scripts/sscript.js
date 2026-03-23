var allRiceDish = new Array();

class ricedishInfo {
    constructor(selector, imagePath) {
        this.selector = selector;
        this.imagePath = imagePath;
    }
    get theSelector() { return this.selector; }
    get theImagePath() { return this.imagePath; }
    toString() { return this.selector + ":" + this.imagePath; }
}

const riceImages = ["Images/kimbap.jpg", "Images/rice_balls.webp", "Images/sushi.jpeg"];
const riceTexts = [

    "Kimbap is a Korean dish but is different from sushi",
    "Rice balls are a portable rice dish that is formed into triangles",
    "Sushi is a Japanese dish that often includes rice with a variety of ingredients"
];

let currentIndex = 0;

function initializeArray() {
    var ricedish = new ricedishInfo("#mainImage", "Images/kimbap.jpg");
    allRiceDish.push(ricedish);
}


function swapImage() {
    $("#mainImage, #dishDescription").fadeOut(500, function() {
        if ($(this).is("#mainImage")) {
            currentIndex = (currentIndex + 1) % riceImages.length;

            $("#mainImage").attr("src", riceImages[currentIndex]);
            $("#dishDescription").text(riceTexts[currentIndex]);

            let randomX = Math.floor(Math.random() * 300);
            let randomY = Math.floor(Math.random() * 200);
            $("#mainImage").css({ left: randomX + "px", top: randomY + "px" });

            $("#mainImage, #dishDescription, #delicious").fadeIn(500, function() {
                
                $("#mainImage").animate({ left: "+=50px", top: "+=30px" }, 2000);

                $("#delicious").animate({ left: "+=200px" }, 1000, "linear");
            });
        }
    });
}

function moveShapes() {
    $("#square").animate({ left: "200px", top: "400px" }, 1000);
    $("#circle").animate({ left: "400px", top: "500px" }, 1000).fadeOut(1000);
    $("#triangle").animate({ left: "100px", top: "500px" }, 1000).fadeIn(1000);
}

function movetext() {
  $("#third").fadeIn(500).animate({left: "300px"}, 1000);
}

$(document).ready(function() {
    initializeArray();
    
    $(allRiceDish[0].theSelector).attr("src", allRiceDish[0].theImagePath);

    $("#movesquare").click(function() {
        $("#square").animate({left: "+=100px", top: "+=50px"}, 500);
    });

    $("#movecircle").click(function() {
        $("#circle").animate({left: "+=50px", top: "-=20px"}, 500);
    });

    $("#movetriangle").click(function() {
        $("#triangle").animate({left: "300px"}, 1000);
    });


    setInterval(swapImage, 6000);
    setTimeout(moveShapes, 2000); 
    setTimeout(movetext, 3000);
});
