$(document).ready(function () {
    $("button").click(function () {
        // 1. Use getJSON instead of .load for structured data
        $.getJSON("data/holidays.json", function(data) { 
            
            // 2. Initialize an empty string to hold your HTML
            let htmlContent = ""; 

            // 3. Use 'data.holidays' (matching the key in your JSON file)
            $.each(data.holidays, function (index, holiday) {
                htmlContent += "<div class='holiday-card'>";
                htmlContent += "<h3>" + holiday.name + "</h3>";
                htmlContent += "<p class='date'>" + holiday.date + "</p>";
                htmlContent += "<span class='tag'>" + holiday.type + "</span>";
                htmlContent += "</div>";
            });

            // 4. Update the DOM once AFTER the loop finishes
            $("#holidayInformation").hide().html(htmlContent).fadeIn(1000);

            // 5. Call your custom plugin here (Requirement #6)
            // $(".holiday-card").myCustomPlugin(); 

        }).fail(function() {
            console.log("Error: Could not load JSON. Check your file path or Live Server.");
        });
    });
});
