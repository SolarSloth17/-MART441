$(document).ready(function () {
            $("button").click(function () {
               $("#holidayInformation").load("data/holidays.json", function(responseText){
                    var holiday = JSON.parse(responseText);
                 
              $.each(data.holidays, function (index, holiday) {
              
                htmlContent += "<div class='holiday-card'>";
                htmlContent += "<h3>" + holiday.name + "</h3>";
                htmlContent += "<p class='date'> " + holiday.date + "</p>";
                htmlContent += "<span class='tag'>" + holiday.type + "</span>";
                htmlContent += "</div>";

                   $("#holidayInformation").hide().html(htmlContent).fadeIn(1000);
                });
            });
        });
