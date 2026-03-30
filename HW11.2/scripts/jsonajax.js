(function($) {
    $.fn.celebrate = function(options) {
        let settings = $.extend({ color: "#007bff" }, options);
        return this.each(function() {
            $(this).css("border-top-color", settings.color);

            $(this).on("mouseenter", function() {
                $(this).css("transform", "scale(1.02)");
            }).on("mouseleave", function() {
                $(this).css("transform", "scale(1)");
            });
        });
    };
}(jQuery));

$(document).ready(function () {
    $("button").click(function () {
        $.getJSON("data/holidays.json", function(data) { 
            let htmlContent = ""; 

            $.each(data.holidays, function (index, holiday) {
                htmlContent += "<div class='holiday-card'>";
                htmlContent += "<h3>" + holiday.name + "</h3>";
                htmlContent += "<p class='date'>" + holiday.date + "</p>";
                htmlContent += "<span class='tag'>" + holiday.type + "</span>";
                htmlContent += "</div>";
            });

            $("#holidayInformation").hide().html(htmlContent).fadeIn(1000);

            $(".holiday-card").each(function() {
                let type = $(this).find(".tag").text().trim();
                let highlightColor = "#007bff"; 

                if (type === "Federal") highlightColor = "#e63946"; 
                if (type === "Shopping") highlightColor = "#4cc9f0"; 
                if (type === "Religious") highlightColor = "#fee440"; 

                $(this).celebrate({
                    color: highlightColor
                });
            });

        }).fail(function() {
            console.log("Error: Could not load JSON. Check your file path or Live Server.");
        });
    });
});
