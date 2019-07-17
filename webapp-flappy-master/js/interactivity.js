
jQuery("#scoresbtn").on("click", function() {
    jQuery("#content").empty();
    jQuery("#content").append(
        "<ul>" +
            "<li>" + "Me" + "</li>" +
            "<li>" + "Also me" + "</li>" +
            "<li>" + "Me again" + "</li>" +
        "</ul>"
    );
});


jQuery("#creditsbtn").on("click", function() {
    jQuery("#content").empty();
    jQuery("#content").append(
        "<div>" + "Game created by me!" + "</div>"
    );
});
jQuery("#helpbtn").on("click", function() {
    jQuery("#content").empty();
    jQuery("#content").append(
        "<ul>"
            + "<li>" + "Press SPACE to fly" + "</li>"
            + "<li>" + "Avoid the incoming pipes" + "</li>"
        + "</ul>"
    );
});
