$("#holidayInformation").hide().html(htmlContent).fadeIn(1000);

$(".holiday-card").each(function() {
    let type = $(this).find(".tag").text();
    let highlightColor = "#007bff"; 

    if (type === "Federal") highlightColor = "#e63946"; 
    if (type === "Shopping") highlightColor = "#4cc9f0";
    if (type === "Religious") highlightColor = "#fee440"; 
    if (type === "Observance") highlightColor = "#9b59b6"; 

    $(this).highlightHoliday({
        borderColor: highlightColor
        
    });
});
