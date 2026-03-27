$(document).ready(function () {
    // 1. Event Listener for the button
    $("#btnSubmit").click(function () {
        
        // Visual feedback: clear the div and show loading
        $("#holidayInformation").empty().html('<p class="loading">Fetching the 2026 Holiday Calendar...</p>');

        // 2. AJAX: Fetch the local JSON dataset
        // NOTE: Ensure your file is named 'holidays.json' inside the 'data' folder
        $.getJSON("data/holidays.json", function (data) {
            
            // 3. Meaningful Display: Create a container for the data
            let htmlContent = "<div class='holiday-grid'>";

            // 4. Iteration: Loop over the returned JSON array
            $.each(data.holidays, function (index, holiday) {
                // Build a "card" for each holiday to make it user-friendly
                htmlContent += "<div class='holiday-card'>";
                htmlContent += "<h3>" + holiday.name + "</h3>";
                htmlContent += "<p class='date'>📅 " + holiday.date + "</p>";
                htmlContent += "<span class='tag'>" + holiday.type + "</span>";
                htmlContent += "</div>";
            });

            htmlContent += "</div>";

            // 5. Inject and Animate the final result
            $("#holidayInformation").hide().html(htmlContent).fadeIn(1000);

        }).fail(function (jqXHR, textStatus, errorThrown) {
            // Error handling for the user
            $("#holidayInformation").html("<p class='error'>Unable to load data. Please ensure you are using a Live Server!</p>");
            console.log("Error details: " + errorThrown);
        });
    });
});
