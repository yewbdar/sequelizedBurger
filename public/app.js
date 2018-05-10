$(document).ready(function () {
    $(".devoBurger").on("click", function (event) {
        var burgerId = $(this).data("burgerid");
        var customersId=$(".customerName").val();
// console.log(customerId)
        $.ajax("/burgers/" + burgerId +"/"+ customersId, {
            type: "PUT"
        }).then(
            function () {
                console.log("Updated id ", id);
            });
        location.reload();
       });
})