let holiday = {
    "name": "Easter Sunday",
    "date": "Variable (March/April)",
    "type": "Religious"
};

$(function () {
    $("button").click(function () {
        showHolidayInfo(); 
    });
});

function showHolidayInfo() {
    $("#holidayInformation").html(
        "Name: " + holiday.name + 
        "<br>Date: " + holiday.date + 
        "<br>Type: " + holiday.type
    );
}
