$(document).ready(function () {
    // Target the specific ID from your HTML
    $("#btnSubmit").click(function () {
        
        // 1. Visual feedback: Let the user know something is happening
        $("#holidayInformation").text("Loading data...");

        // 2. Load the external file into the div
        // Make sure the path "data/bikeInfo.txt" matches your folder structure!
        $("#holidayInformation").load("data/bikeInfo.txt", function(response, status, xhr) {
            if (status == "success") {
                // Trigger the fade animation we built
                $(this).hide().fadeIn("slow");
            } else {
                $(this).html("<p style='color:red;'>Error: Could not load data.</p>");
            }
        });
    });
});
