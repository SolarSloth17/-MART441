var myViewFinderArray = new Array();

class ViewFinder {
    constructor(title, image, description, author, imageYear) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.imageYear = imageYear;
    }

    toString() {
        return `<h2>${this.title}</h2>
                <img src='${this.image}' alt='${this.title}' width='300'>
                <p><strong>Description:</strong> ${this.description}</p>
                <p><strong>Author:</strong> ${this.author}</p>
                <p><strong>Year:</strong> ${this.imageYear}</p>`;
    }
}

const images = [
    new ImageObject(}
    new ImageObject(}
    new ImageObject(}
    new ImageObject(}
    new ImageObject(}

const imageElement = document.getElementById('image');
const descriptionElement = document.getElementById('description');
const switchButton = document.getElementById('switch-button');

function accessInformation()
{
       var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
      document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();
]
