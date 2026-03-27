let holiday = {
    "name": "Easter Sunday",
    "date": "Variable (March/April)",
    "type": "Religious"
};

$(function () {
    $("button").click(function () {
        // This is looking for showHolidayInfo
        showHolidayInfo(); 
    });
});

// Rename this from showBikeInfo to showHolidayInfo
function showHolidayInfo() {
    $("#HolidayInformation").html(
        "Name: " + holiday.name + 
        "<br>Date: " + holiday.date + 
        "<br>Type: " + holiday.type
    );
}
