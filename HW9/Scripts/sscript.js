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
