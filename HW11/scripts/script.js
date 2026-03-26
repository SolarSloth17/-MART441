 let holiday = {
                "name": "Easter Sunday",
                "date": "Variable (March/April)",
                "type": "Religious"
            }
        
        $(function () {
            $("button").click(function () {
                showHolidayInfo();
            });

        });
       
        function showBikeInfo()
            {
                $("#HolidayInformation").html("Name: " + holiday.name
                + "<br>date:" + holiday.date+ "<br>type" + holiday.type);
            }
