    <script>
        function getChoice1()
        {
            var myChoice = document.getElementById("choice").value;
            var myQuestion = document.getElementById("question");
            if(myChoice === "Stay at home")
            {
                document.getElementById("choice").style.display="none";
                document.getElementById("btnSubmit").style.display="none";
                
                document.getElementById("choice2").style.display="block";
                document.getElementById("btnSubmit2").style.display="block";
                

                myQuestion.innerHTML = "Your friends invited you out for the evening. Will you agree with their invitation or stay home?";
            }
            else if(myChoice === "Agree")
            {
                document.getElementById("choice").style.display="none";
                document.getElementById("btnSubmit").style.display="none";
                
                document.getElementById("choice3").style.display="block";
                document.getElementById("btnSubmit3").style.display="block";
                myQuestion.innerHTML = "Blue is the color of loyalty and sincerity.  Are you willing to show up and stand by those who need a friend?";

            }
            else
            {
                myQuestion.innerHTML = "Invalid answer";
            }
        
        }
        function getChoice2()
        {
            var answer = document.getElementById("choice2").value;
            var myQuestion = document.getElementById("question");
            if(answer === "yes")
            {
                document.getElementById("mainImage").src = "grateful.jpg"
                myQuestion.innerHTML = "Thank you for your kindness!";
            }
            else if(answer === "no")
            {
                myQuestion.innerHTML = "Please remember we are all in this together.";
            }
        }

        function getChoice3()
        {
            var answer = document.getElementById("choice3").value;
            var myQuestion = document.getElementById("question");
            if(answer === "yes")
            {
                document.getElementById("mainImage").src = "together.jpg"
                myQuestion.innerHTML = "Thank you for your kindness!";
            }
            else if(answer === "no")
            {
                myQuestion.innerHTML = "Please remember we are all in this together.";
            }
        }
    </script>
