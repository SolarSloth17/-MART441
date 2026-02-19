var imageTags = ["image1", "image2", "image3", "image4","image5","image6", "image7", "image8", "image9"];

var blankImagePath = "images/gofish.jpg";

var actualImages = new Array();

function printBlanks()
{

    createRandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src= blankImagePath;
    }
       
    
    
}
