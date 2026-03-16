var imageSelector = "#artImage";
var textSelector = "#artText";
var shapeSelector = "#artShape";

var allImages = new Array();
var allTexts = new Array();
var allShapes = new Array();

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

