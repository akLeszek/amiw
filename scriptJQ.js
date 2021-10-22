$(document).ready(function () {
    $("#options ul").on("click", "li" ,function (event) {
        let avatarId = "#avatar-" + event.currentTarget.id;
        $(avatarId).toggle();

        let span = $(event.currentTarget).find("span");
        if($(avatarId).is(":visible")) {
            span.text("usuń");
            $(this).addClass("selected");
        } else {
            span.text("dodaj");
            $(this).removeClass("selected");
        }
    });
})