$(document).ready(function () {

    $(".devoBurger").on("click", function (event) {
        var id = $(this).data("burgerid");
        $.ajax("/burgers/" + id, {
            type: "PUT"
        }).then(
            function () {
                console.log("Updated id ", id);
            });
        location.reload();
    });
})