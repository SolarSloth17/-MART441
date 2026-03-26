 $(document).ready(function () {
            $("button").click(function () {
                $("#holidayInformation").load("data/bikeInfo.txt", fadeText);
            });
        });

        function fadeText()
        {
            $("#holidayInformation").fadeOut("slow").fadeIn("slow");
        }
