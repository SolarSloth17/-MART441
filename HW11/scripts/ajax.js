$(document).ready(function () {
    $("button").click(function () {
        // We target the ID and load the external file
        // The second argument 'fadeText' is the callback function
        $("#holidayInformation").load("data/holidayInfo.txt", fadeText);
    });
});

function fadeText(responseText, statusText, xhr) {
    // Check if the load actually worked before animating
    if (statusText == "success") {
        $("#holidayInformation")
            .hide() // Start hidden
            .fadeIn("slow")
            .animate({ fontSize: "1.2em" }, 500); // Optional: Pop the text slightly
    } else {
        // If the file is missing, tell the user!
        $("#holidayInformation").html("Error: Could not find the holiday file.");
    }
}
