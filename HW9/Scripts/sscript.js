var imageSelector = "#artImage";
var textSelector = "#artText";
var shapeSelector = "#artShape";

var allImages = new Array();
var allTexts = new Array();
var allShapes = new Array();

function initializeArray() {
    allImages.push(new ElementInfo("#artImage", "images/image1.jpg"));
    allImages.push(new ElementInfo("#artImage", "images/image2.jpg"));
    allImages.push(new ElementInfo("#artImage", "images/image3.jpg"));

    allShapes.push(new ElementInfo("#artShape", "square"));
    allShapes.push(new ElementInfo("#artShape", "circle"));
    allShapes.push(new ElementInfo("#artShape", "triangle"))

    allTexts.push(new ElementInfo("#artText", "Australia is wider than the moon, measuring almost 4,000 km in diameter from east to west."));
    allTexts.push(new ElementInfo("#artText", "In the 1830s, ketchup was sold as a medicine to treat diarrhea, indigestion, and jaundice."));
    allTexts.push(new ElementInfo("#artText", "It's illegal to own just one guinea pig in Switzerland."));
;
    $(document).ready(function(){
    initializeArray();
    console.log(allDogs.length);
    console.log(allDogs[0].toString());
    console.log(allDogs[0].theSelector);
    console.log(allDogs[0].theImagePath);

class ElementInfo {
    constructor(selector, content) {
        this.selector = selector;
        this.content = content;
    }

    get theSelector() {
        return this.selector;
    }

    get theContent() {
        return this.content;
    }

    toString() {
        return this.selector + ":" + this.content;
    }
}
  function switchImage() {
        $(imageSelector).fadeOut(1000, function () {
            currentImageIndex = (currentImageIndex + 1) % allImages.length;
            $(imageSelector).attr("src", allImages[currentImageIndex].theContent);
            $(imageSelector).fadeIn(1000);
        });
    }

    function switchText() {
        $(textSelector).fadeOut(1000, function () {
            currentTextIndex = (currentTextIndex + 1) % allTexts.length;
            $(textSelector).text(allTexts[currentTextIndex].theContent);
            $(textSelector).fadeIn(1000);
        });
    }

    function switchShape() {
        $(shapeSelector).fadeOut(1000, function () {
            currentShapeIndex = (currentShapeIndex + 1) % allShapes.length;
            $(shapeSelector).removeClass().addClass("elementInfo " + allShapes[currentShapeIndex].theContent);
            $(shapeSelector).fadeIn(1000);
        });
    }

