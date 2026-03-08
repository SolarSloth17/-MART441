
var myViewFinderArray = new Array();

class ViewFinder {
    constructor(title, image, description, author, Year) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.Year = Year;
    }

    toString() 
     {
        return "Title: " + this.title; 
        return "Image: " + this.image;   
        return "Description: " + this.description; 
        return "Author: " + this.author; 
        return "Year: " + this.Year; 
    }
   get theTitle()
    {
        return this.title;
    }
    get theImage()
    {
        return this.image;
    }
    get theDescription()
    {
        return this.description;
    }   
    get theAuthor()
    {
        return this.author;
    }       
    get theYear()   
    {
        return this.Year;
    }
}
function initializeArray()
 {
     myViewFinder = new ViewFinder(
        '"CAPITOL CRAWL"', "./images/rawl_th.jpg ","disable people", "Tom Olin", "1990"
     );
   myViewFinder2 = new ViewFinder(
        '"Hate Is A Virus"', "./images/Anna-Rogacheva.jpg ","artwork","Anna Rogacheva", "2021"
   );
   myViewFinder3 = new ViewFinder(
        '"I.C.E. Out of Minneapolis"', "./images/ice out.jpg ","Done with ICE", "Burlesque Of North America", "2026"
   );
   myViewFinder4 = new ViewFinder(
        '"Untitle"', "./images/pay gap.jpg", "paygap","Gustav Dejert", "2016"
   );
    myViewFinder5 = new ViewFinder(
        '"Climate Change Data "', "./images/climate change.jpg ","climate problem", "Jill Pelto", "2015"
    );
        myViewFinderArray.push(myViewFinder);
        myViewFinderArray.push(myViewFinder2);
        myViewFinderArray.push(myViewFinder3);
        myViewFinderArray.push(myViewFinder4);
        myViewFinderArray.push(myViewFinder5);
}       

function accessInformation()
{
       var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
      document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();
      document.getElementById("image").innerHTML = myViewFinderArray[randomNumber].image;
      document.getElementById("description").innerHTML = myViewFinderArray[randomNumber].theDescription;
      document.getElementById("author").innerHTML = myViewFinderArray[randomNumber].theAuthor;
      document.getElementById("year").innerHTML = myViewFinderArray[randomNumber].theYear
}
