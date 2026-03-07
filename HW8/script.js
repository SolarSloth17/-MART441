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
    new ImageObject(
        '"CAPITOL CRAWL"'. './images/ ", 'Tom Olin', '1990'
        },
    new ImageObject(
        '"Hate Is A Virus"'. './images/ ", 'Anna Rogacheva', '2021'
        },
    new ImageObject(
        '"I.C.E. Out of Minneapolis"'. './images/ ", ' Burlesque Of North America', '2026'
        },
    new ImageObject(
        '"Untitle"'. './images/ ", 'Gustav Dejert', '2016'
        },
    new ImageObject(
        '"Climate Change Data "'. './images/ ", 'Jill Pelto', '2015'
        },

const imageElement = document.getElementById('image');
const descriptionElement = document.getElementById('description');
const switchButton = document.getElementById('switch-button');

function accessInformation()
{
       var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
      document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();
]
