var imageNames = ["image1", "image2", "image3", "image4","image5","image6", "image7", "image8", "image9"];
var blankImagePath = "images/gofish.jpg";
var firstNumber = -1;
var secondNumber = -1;
var score = 0;
var allFound = 0;
var player = {"firstname":"", "lastname":"", "age":0, "score":0};

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
    var actualImagePath = ["images/dog.jpg", "images/tiger.jpeg"];
    var count = [0,0];
    while(actualImages.length < 9)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
        if(count[randomNumber] < 2)
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
            window.location = "HWExampleEnd.html";
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
    window.location = "HWExample.html";
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
