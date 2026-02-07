function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "You have made it to the top pf the mountain. Now you have to choose to go down the blue square or the black diamond.";
        document.getElementById("choice1").innerHTML = "Blue square";
        document.getElementById("choice2").innerHTML = "Black diamond";
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "You can't hold back the line which means you have to go back of the line'";
        document.getElementById("choice1").innerHTML = "You decided to chicken out and went to find a place to wait for your friends";
        document.getElementById("choice2").innerHTML = "You decided to do something else";
    } else if (choice == 1 && answer1 == "Blue square") {
        document.getElementById("story").innerHTML = "You went down the path of blue square.";
        document.getElementById("choice1").innerHTML = "You were able to got to the bottom with no problem";
        document.getElementById("choice2").innerHTML = "You made to the bottom but you fall down many times before reaching the bottom";
    } else if (choice == 2 && answer2 == "Black diamond") {
        document.getElementById("story").innerHTML = "You decieded to just your luck and went down the path of black diamond.";
        document.getElementById("choice1").innerHTML = "You couldn't get to the bottom because you were fatally injured on the way down";
        document.getElementById("choice2").innerHTML = "You were able to get down the bottom however there were falling down a lot ";
    } else if (choice == 1 && answer1 == "You decided to chicken out and went to find a place to wait for your friends") {
        document.getElementById("story").innerHTML = "While waiting for your friends to be finish, what will you do?'";
        document.getElementById("choice1").innerHTML = "you go looking for food";
        document.getElementById("choice2").innerHTML = "go on your phone";
    } else if (choice == 2 && answer2 == "You decided to do something els") {
        document.getElementById("story").innerHTML = "There is two other activity to do. One is snow tubing, and the other is dog sledding. What will you pick?";
        document.getElementById("choice1").innerHTML = "Dog shledding";
        document.getElementById("choice2").innerHTML = "Snow tubing";
    }

    else if (choice == 1 && answer1 == "You were able to got to the bottom with no problem") {
        document.getElementById("story").innerHTML = "You very please with yourself and think you can do the black diamond." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "You made to the bottom but you fall down many times before reaching the bottom") {
        document.getElementById("story").innerHTML = "Your bum is hurting but you are happy with you choice" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "You couldn't get to the bottom because you were fatally injured on the way down") {
        document.getElementById("story").innerHTML = "You were taken to the hopsital and was given a lucture about why you shouldn't gone down the black diamond path" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "You were able to get down the bottom however there were falling down a lot") {
        document.getElementById("story").innerHTML = "Eventhoug you were able to get to the bottom, you deciede it is best to not pick black diamond again" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "you go looking for food") {
        document.getElementById("story").innerHTML = "You are very happily munching on food while waiting your friends to be done." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "go on your phone") {
        document.getElementById("story").innerHTML = "You pass the time by going on socail media and playing games on your phone." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Dog shledding";") {
        document.getElementById("story").innerHTML = "You had a lot of fun meeting with the dogs and seeing the snowy landscape." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Snow tubing") {
        document.getElementById("story").innerHTML = "You had a lot of fun but your tailbone hurts." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Yes restart") {
        document.getElementById("story").innerHTML = "Our fearless leader, 'Pugster' has entered the dog park for the first time. Scared? Yes, but willing to give it a try. Are you ready to start on adventure with Pugster?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 2 && answer2 == "No quit") {
        document.getElementById("story").innerHTML = "Pugster thanks you!";
