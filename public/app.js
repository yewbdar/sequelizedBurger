$(document).ready(function () {
    $(".devoBurger").on("click", function (event) {
        var id = $(this).data("burgerid");
        var customerName=$(".customerName").val();

        $.ajax("/burgers/" + id +"/"+ customerName, {
            type: "PUT"
        }).then(
            function () {
                console.log("Updated id ", id);
            });
        location.reload();
      });
})