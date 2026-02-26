var imageNames = ["image1", "image2", "image3", "image4","image5","image6", "image7", "image8"];
var blankImagePath = "images/Daisy.jpg";
var firstNumber = -1;
var secondNumber = -1;
var score = 0;
var allFound = 0;
var player = {"firstname":"", "lastname":"", "age":0, "score":0};
var actualImages = [];

function printBlanks()
{
    createRandomImageArray();
    for(var i = 0; i < imageNames.length; i++)
    {
        document.getElementById(imageNames[i]).src= blankImagePath;
    }         
}

function createRandomImageArray()
{
    var actualImagePath = ["images/Daisy.jpg", "images/6014002.jpeg", "images/Jackson eating.jpg", "images/Little buddie.jpg", "images/Zeus.jpg", "images/goat.CR2", "images/horse.JPG", "images/soph.jpg];
    var count = [0,0];
    while(actualImages.length < 9)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
        if(count[randomNumber] < 3)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }   
}

function flipImage(number)
{

    if(firstNumber >= 0)
    {
        secondNumber = number;
        document.getElementById(imageNames[number]).src = actualImages[secondNumber];
        
    }
    else if(firstNumber < 0) 
    {
        firstNumber = number;
        document.getElementById(imageNames[firstNumber]).src= actualImages[firstNumber];
    
    }

    if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        score++;
        setTimeout(imagesDisappear, 1000); 
    }
    else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        score++;
        allFound++;
        
        firstNumber = -1;
        secondNumber = -1;
        if(allFound == actualImages.length/2)
        {  
            player.score = score;
            localStorage.setItem("playerInfo", JSON.stringify(player));
            window.location = "end.html";
        }
    }
}

function imagesDisappear()
{

    console.log(firstNumber);
    document.getElementById(imageNames[firstNumber]).src = blankImagePath;
    document.getElementById(imageNames[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}

// add to the JSON from the textboxes
function addToPlayer()
{
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var age = document.getElementById("txtAge").value;
   
    player.firstname = firstName;
    player.lastname = lastName;
    player.age = age;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "intro.html";
}

function playerInfo()
{
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    var str = "Name: " + player.firstname + " " + player.lastname + "<br>" +
    "Age: " + player.age + "<br>" +
    "Score: " + player.score;
    if(document.getElementById("endInformation") != null)
    {
        document.getElementById("endInformation").innerHTML = str;
    }
    
   
}
